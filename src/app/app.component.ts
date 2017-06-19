import { Component, ViewContainerRef } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
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
  constructor(private af: AngularFireAuth, viewContainerRef: ViewContainerRef, private router: Router) {

    // You need this small hack in order to catch application root view container ref
    this.viewContainerRef = viewContainerRef;

  }

  logout() {
    this.af.auth.signOut();
    this.router.navigate(['/'])
  }

}


@Component({
  templateUrl: "./page.not.found.html"
})
export class PageNotFoundComponent {

}