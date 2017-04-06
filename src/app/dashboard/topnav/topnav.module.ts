import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TopnavComponent } from './topnav.component';

@NgModule({
    imports: [
        RouterModule
    ],
    declarations: [TopnavComponent],
    exports: [TopnavComponent]
})

export class TopnavModule { }
