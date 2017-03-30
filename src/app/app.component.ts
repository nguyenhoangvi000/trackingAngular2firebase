import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { SebmGoogleMap, SebmGoogleMapPolygon, LatLngLiteral } from 'angular2-google-maps/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // geolocationCurrents: FirebaseListObservable<any[]>;

  // currentLat: number;
  // currentLng: number;

  constructor(private af: AngularFire) {
    // this.geolocationCurrents = af.database.list('/geolocationCurrents')
    // navigator.geolocation.watchPosition((position) => {
    //   this.currentLat = position.coords.latitude;
    //   this.currentLng = position.coords.longitude;
    //   console.log(this.currentLat + ":" + this.currentLng);
    // })

  }

}
