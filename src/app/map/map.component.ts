import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { SebmGoogleMap, SebmGoogleMapPolygon, LatLngLiteral } from 'angular2-google-maps/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  geolocationCurrents: FirebaseListObservable<any[]>;

  currentLat: number;
  currentLng: number;

  constructor(private af: AngularFire) {
    this.geolocationCurrents = af.database.list('/geolocationCurrents')
    navigator.geolocation.watchPosition((position) => {
      this.currentLat = position.coords.latitude;
      this.currentLng = position.coords.longitude;
      console.log(this.currentLat + ":" + this.currentLng);
    })
  }

  ngOnInit() {
  }

}
