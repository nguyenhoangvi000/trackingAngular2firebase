import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DriverlistComponent } from './../driverlist/index';
import { MapComponent } from './../map/index';

// import { MapComponent } from './index';

@NgModule({
    declarations: [
        DriverlistComponent,
        MapComponent
    ],
    imports: [
        RouterModule

    ]
})

export class LocationModule { }
