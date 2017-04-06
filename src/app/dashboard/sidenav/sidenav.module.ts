import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SidenavComponent } from './sidenav.component';

@NgModule({
    imports: [
        RouterModule
    ],
    declarations: [SidenavComponent],
    exports: [SidenavComponent]
})

export class SidenavModule { }
