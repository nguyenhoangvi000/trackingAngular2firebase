import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms'

import { DashboardComponent } from './dashboard.component';

import { AboutModule } from './about/about.module';
import { MapModule } from './map/map.module';
import { DriverModule } from './driver/driver.module';
import { DriverComponent, DialogResultExampleDialog } from './driver/driver.component';
import { TopnavModule } from './topnav/topnav.module';
import { SidenavModule } from './sidenav/sidenav.module';

import { SidenavComponent } from './sidenav/sidenav.component';
import { TopnavComponent } from './topnav/topnav.component';
import { DialogComponent } from './dialog/dialog.component';
import { DialogconfirmComponent } from './dialogconfirm/dialogconfirm.component';
import { DialogchatComponent } from './dialogchat/index';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        AboutModule,
        MapModule,
        DriverModule,
        TopnavModule,
        FormsModule
    ],
    entryComponents: [DialogComponent],
    declarations: [DashboardComponent, TopnavComponent, DialogconfirmComponent, DialogchatComponent],
    exports: [DashboardComponent]
})

export class DashboardModule { }