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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DriverComponent, DialogResultExampleDialog } from './dashboard/driver/driver.component';
import { SidenavComponent } from './dashboard/sidenav/sidenav.component';
import { MapComponent } from './dashboard/map/map.component';
import { AboutComponent } from './dashboard/about/about.component';
import { TopnavComponent } from './dashboard/topnav/topnav.component';
import { DialogComponent } from './dashboard/dialog/index';
import { DialogconfirmComponent } from './dashboard/dialogconfirm/index';
import { DialogchatComponent } from './dashboard/dialogchat/index';

import { DriverService } from './services/driverService/driver.service';
import { UserService } from './services/userService/user.service';
import { MapService } from './services/mapService/map.service';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    DriverComponent,
    DialogComponent,
    DialogconfirmComponent,
    DialogchatComponent,
    SidenavComponent,
    MapComponent,
    LoginComponent,
    DashboardComponent,
    AboutComponent,
    TopnavComponent
  ],

  imports: [
    NgxDatatableModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(firebaseConfig),
    MaterialModule.forRoot(),
    MdDataTableModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDbe749fuRGdvKhAm96T9-ryU0hyjmbrT0'
    })
  ],
  entryComponents: [DialogComponent, DialogconfirmComponent, DialogchatComponent],
  providers: [DriverService, MapService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
