import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { SebmGoogleMap, SebmGoogleMapPolygon, LatLngLiteral } from 'angular2-google-maps/core';
import { DriverService } from '../../services/driverService/index';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  geolocationCurrents: FirebaseListObservable<any[]> = this.af.database.list('/geolocationCurrents');
  driverCurrents: FirebaseListObservable<any[]>;


  currentLat: number;
  currentLng: number;

  constructor(private af: AngularFire, private driverService: DriverService) {
    // this.geolocationCurrents = af.database.list('/geolocationCurrents')

    this.driverCurrents = driverService.getAllDriver();
    console.log(driverService);
    navigator.geolocation.watchPosition((position) => {
      this.currentLat = position.coords.latitude;
      this.currentLng = position.coords.longitude;
      console.log(this.currentLat + ":" + this.currentLng);
    })
  }

  changeDriver(driver) {
    console.log(driver.uid);
    this.geolocationCurrents = this.af.database.list('/geolocationCurrents');
  }

  ngOnInit() {
  }

}
