import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DriverComponent } from './driver.component';

@NgModule({
    imports: [
        RouterModule
    ],
    declarations: [DriverComponent],
    exports: [DriverComponent]
})

export class DriverModule { }
