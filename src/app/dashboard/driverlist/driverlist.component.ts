import { Component, OnInit, NgZone } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { SebmGoogleMap, SebmGoogleMapPolygon, LatLngLiteral } from 'angular2-google-maps/core';
import { DriverService } from '../../services/driverService/index';

@Component({
  selector: 'driverlist',
  templateUrl: './driverlist.component.html',
  styleUrls: ['./driverlist.component.css']
})
export class DriverlistComponent implements OnInit {

  geolocationCurrents: FirebaseListObservable<any[]>;
  driverCurrents: FirebaseListObservable<any[]>;

  driverID: string = '';


  currentLat: number;
  currentLng: number;

  constructor(private af: AngularFire, private driverService: DriverService, private ngZone: NgZone) {
    this.driverCurrents = driverService.getAllDriver();
    console.log(driverService);
  }

  ngOnInit() {
  }

  changeDriver(driver) {
    console.log(driver.$key);
    var driverKey = '/geolocationCurrents/' + driver.$key;
    this.driverService.passingDriverId(driver.$key);
    this.geolocationCurrents = this.af.database.list(driverKey);
    console.log(driverKey);

    const positionCurrent = this.af.database.object(driverKey, { preserveSnapshot: true });
    positionCurrent.subscribe(snapshot => {
      let currentPos = [];
      snapshot.forEach(element => {
        currentPos.push(element);
      });

      this.currentLat = currentPos[currentPos.length - 1].val().lat;
      this.currentLng = currentPos[currentPos.length - 1].val().lng;

    })

    // navigator.geolocation.watchPosition((position) => {
    //   this.currentLat = position.coords.latitude;
    //   this.currentLng = position.coords.longitude;
    //   console.log(this.currentLat + ":" + this.currentLng);
    // })

  }

}
