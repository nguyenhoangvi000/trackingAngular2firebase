import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

import { AboutModule } from './about/about.module';
import { MapModule } from './map/map.module';
import { DriverModule } from './driver/driver.module';
import { TopnavModule } from './topnav/topnav.module';
import { SidenavModule } from './sidenav/sidenav.module';

import { SidenavComponent } from './sidenav/sidenav.component';
import { TopnavComponent } from './topnav/topnav.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        AboutModule,
        MapModule,
        DriverModule,
        TopnavModule
    ],
    declarations: [DashboardComponent, TopnavComponent],
    exports: [DashboardComponent]
})

export class DashboardModule { }