import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from './../environments/firebase.config';
import { MaterialModule } from '@angular/material';
import { MdDataTableModule } from 'ng2-md-datatable';
import { AgmCoreModule } from 'angular2-google-maps/core';
import 'hammerjs';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DriverComponent } from './dashboard/driver/driver.component';
import { SidenavComponent } from './dashboard/sidenav/sidenav.component';
import { MapComponent } from './dashboard/map/map.component';
import { AboutComponent } from './dashboard/about/about.component';
import { TopnavComponent } from './dashboard/topnav/topnav.component';


import { routes } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    DriverComponent,
    SidenavComponent,
    MapComponent,
    DashboardComponent,
    AboutComponent,
    TopnavComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(firebaseConfig),
    MaterialModule.forRoot(),
    MdDataTableModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDbe749fuRGdvKhAm96T9-ryU0hyjmbrT0'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
