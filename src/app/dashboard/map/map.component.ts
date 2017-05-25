import { Component, OnInit, NgZone, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { SebmGoogleMap, SebmGoogleMapPolygon, LatLngLiteral } from 'angular2-google-maps/core';
import { DriverService } from '../../services/driverService/index';
import { Observable, Subject } from "rxjs/Rx";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  geolocationCurrents: FirebaseListObservable<any[]>;
  driverCurrents: FirebaseListObservable<any[]>;

  @Input('driverID') driverID: string;

  currentLat: number;
  currentLng: number;

  constructor(private af: AngularFire, private driverService: DriverService, private ngZone: NgZone) {
    // this.geolocationCurrents = af.database.list('/geolocationCurrents')

    this.driverCurrents = driverService.getAllDriver();
    console.log(driverService);

  }


  ngOnInit() {
    this.driverService.onPassingDriverID().subscribe((driverID) => {
      console.log(driverID);
      var driverKey = '/geolocationCurrents/' + driverID;
      this.geolocationCurrents = this.af.database.list(driverKey);
      console.log(driverKey);

      let positionCurrent = this.af.database.object(driverKey, { preserveSnapshot: true });
      positionCurrent.subscribe(snapshot => {
        let currentPos = [];
        snapshot.forEach(element => {
          currentPos.push(element);
        });

        this.currentLat = currentPos[currentPos.length - 1].val().lat;
        this.currentLng = currentPos[currentPos.length - 1].val().lng;

      })
    })
  }




  
  // changeDriver(driver) {
  //   console.log(driver.$key);
  //   var driverKey = '/geolocationCurrents/' + driver.$key;
  //   this.geolocationCurrents = this.af.database.list(driverKey);
  //   console.log(driverKey);

  //   const positionCurrent = this.af.database.object(driverKey, { preserveSnapshot: true });
  //   positionCurrent.subscribe(snapshot => {
  //     let currentPos = [];
  //     snapshot.forEach(element => {
  //       currentPos.push(element);
  //     }).then(function () {
  //       this.currentLat = currentPos[currentPos.length - 1].val().lat;
  //       this.currentLng = currentPos[currentPos.length - 1].val().lng;
  //     });



  //   })

  //   // navigator.geolocation.watchPosition((position) => {
  //   //   this.currentLat = position.coords.latitude;
  //   //   this.currentLng = position.coords.longitude;
  //   //   console.log(this.currentLat + ":" + this.currentLng);
  //   // })

  // }

}



