import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms'

// import { DashboardComponent } from './dashboard.component';

import { AboutModule } from './about/about.module';
import { MapModule } from './map/map.module';
import { DriverModule } from './driver/driver.module';
import { DriverComponent } from './driver/index';
import { TopnavModule } from './topnav/topnav.module';
import { SidenavModule } from './sidenav/sidenav.module';
import { LocationModule } from './location/location.module';
import { DriverListModule } from './driverlist/driverlist.module';
import { ChatModule } from './chat/chat.module';

import { SidenavComponent } from './sidenav/index';
import { ChatComponent } from './chat/index';
import { TopnavComponent } from './topnav/topnav.component';
import { DialogComponent } from './dialog/dialog.component';
import { LocationComponent } from './location/index';
import { DriverlistComponent } from './driverlist/driverlist.component';
import { DialogeditComponent } from './dialogedit/dialogedit.component';
import { RouteComponent } from './route/route.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        AboutModule,
        MapModule,
        DriverModule,
        TopnavModule,
        FormsModule,
        LocationModule,
        DriverListModule,
        ChatModule
    ],
    entryComponents: [DialogComponent],
    // declarations: [TopnavComponent, LocationComponent, DriverlistComponent, DialogeditComponent, RouteComponent, ChatComponent]
    declarations: [TopnavComponent]
})

export class DashboardModule { }