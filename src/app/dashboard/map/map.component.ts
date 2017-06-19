import { Component, OnInit, NgZone, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
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

  currentLat: number = 0;
  currentLng: number = 0;

  constructor(private af: AngularFireDatabase, private driverService: DriverService, private ngZone: NgZone) {
    // this.geolocationCurrents = af.database.list('/geolocationCurrents')

    this.driverCurrents = driverService.getAllDriver();

    // navigator.geolocation.getCurrentPosition(function (location) {
    //   this.currentLat = location.coords.latitude;
    //   this.currentLng = location.coords.longitude;
    // });
    // console.log(driverService);

  }


  ngOnInit(): void {
    console.log("Da nhay vao onInit");

    this.driverService.onPassingDriverID().subscribe((driverID) => {
      console.log(driverID);
      var driverKey = '/geolocationCurrents/' + driverID;
      console.log(driverKey);
      this.geolocationCurrents = this.af.list(driverKey);

      let positionCurrent = this.af.object(driverKey, { preserveSnapshot: true });
      positionCurrent.subscribe(snapshot => {
        let currentPos = [];
        snapshot.forEach(element => {
          console.log(element);
          currentPos.push(element);
        });

        console.log(currentPos[currentPos.length - 1]);

        this.currentLat = currentPos[currentPos.length - 1].val().lat;
        this.currentLng = currentPos[currentPos.length - 1].val().lng;

        console.log(this.currentLat);
        console.log(this.currentLng);

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



