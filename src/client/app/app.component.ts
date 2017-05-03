import { Component, ViewContainerRef } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { SebmGoogleMap, SebmGoogleMapPolygon, LatLngLiteral } from 'angular2-google-maps/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // geolocationCurrents: FirebaseListObservable<any[]>;

  // currentLat: number;
  // currentLng: number;
  private viewContainerRef: ViewContainerRef;
  constructor(private af: AngularFire, viewContainerRef: ViewContainerRef, private router: Router) {

    // You need this small hack in order to catch application root view container ref
    this.viewContainerRef = viewContainerRef;

  }

  logout() {
    this.af.auth.logout();
    this.router.navigate(['/'])
  }

}


@Component({
  templateUrl: "./page.not.found.html"
})
export class PageNotFoundComponent {

}