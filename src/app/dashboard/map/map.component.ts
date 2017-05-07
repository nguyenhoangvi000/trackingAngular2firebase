import { Component, OnInit, NgZone } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { SebmGoogleMap, SebmGoogleMapPolygon, LatLngLiteral } from 'angular2-google-maps/core';
import { DriverService } from '../../services/driverService/index';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  geolocationCurrents: FirebaseListObservable<any[]>;
  driverCurrents: FirebaseListObservable<any[]>;


  currentLat: number;
  currentLng: number;

  constructor(private af: AngularFire, private driverService: DriverService, private ngZone: NgZone) {
    // this.geolocationCurrents = af.database.list('/geolocationCurrents')

    this.driverCurrents = driverService.getAllDriver();
    console.log(driverService);


    // this.currentLat = currentPosition[0].lat;
    // this.currentLng = currentPosition[0].lng;

    navigator.geolocation.watchPosition((position) => {
      this.currentLat = position.coords.latitude;
      this.currentLng = position.coords.longitude;
      console.log(this.currentLat + ":" + this.currentLng);
    })
  }

  changeDriver(driver) {
    console.log(driver.$key);
    var driverKey = '/geolocationCurrents/' + driver.$key;
    this.geolocationCurrents = this.af.database.list(driverKey);
    console.log(driverKey);

    navigator.geolocation.watchPosition((position) => {
      this.currentLat = position.coords.latitude;
      this.currentLng = position.coords.longitude;
      console.log(this.currentLat + ":" + this.currentLng);
    })

  }

  ngOnInit() {
  }

}
