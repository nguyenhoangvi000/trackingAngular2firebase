import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MapComponent } from './map.component';

@NgModule({
    imports: [
        RouterModule
    ],
    declarations: [MapComponent],
    exports: [MapComponent]
})

export class MapModule { }
