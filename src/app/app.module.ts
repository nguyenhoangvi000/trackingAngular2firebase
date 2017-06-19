import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppComponent, PageNotFoundComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

import { firebaseConfig } from './../environments/firebase.config';
import { MaterialModule } from '@angular/material';
// import { MdDataTableModule } from 'ng2-md-datatable';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocalStorageModule } from 'angular-2-local-storage';
import 'hammerjs';

import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DriverComponent } from './dashboard/driver/driver.component';
import { SidenavComponent } from './dashboard/sidenav/index';
import { ChatComponent } from './dashboard/chat/index';
import { MessagelistComponent } from './dashboard/chat/messagelist/index';
import { MessagebubbleComponent } from './dashboard/chat/messagebubble/index';
import { MapComponent } from './dashboard/map/index';
import { DriverlistComponent } from './dashboard/driverlist/index';
import { LocationComponent } from './dashboard/location/location.component';
import { AboutComponent } from './dashboard/about/about.component';
import { RouteComponent } from './dashboard/route/route.component';
// import { TopnavComponent } from './dashboard/topnav/topnav.component';
import { DialogComponent } from './dashboard/dialog/index';
import { DialogeditComponent } from './dashboard/dialogedit/index';
import { DialogconfirmComponent } from './dashboard/dialogconfirm/index';
import { DialogchatComponent } from './dashboard/dialogchat/index';

import { DriverService } from './services/driverService/driver.service';
import { UserService } from './services/userService/user.service';
import { MapService } from './services/mapService/map.service';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { Ng2DropdownModule } from 'ng2-material-dropdown';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatePickerModule } from 'ng2-datepicker';

import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    DriverComponent,
    DialogComponent,
    DialogconfirmComponent,
    DialogeditComponent,
    DialogchatComponent,
    MapComponent,
    SidenavComponent,
    LoginComponent,
    RouteComponent,
    DashboardComponent,
    ChatComponent,
    MessagelistComponent,
    MessagebubbleComponent,
    AboutComponent,
    LocationComponent,
    DriverlistComponent
  ],

  imports: [
    NgxDatatableModule,
    Ng2DropdownModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    HttpModule,
    DatePickerModule,
    LocalStorageModule.withConfig({
      prefix: 'tracking-angular2firebase',
      storageType: 'sessionStorage'
    }),
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDy8rc5lBPawVNc9-UuyraxoXnzp9BNpOM'
    })
  ],
  entryComponents: [DialogComponent, DialogconfirmComponent, DialogchatComponent, DialogeditComponent],
  providers: [DriverService, MapService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
