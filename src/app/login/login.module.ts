import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';

@NgModule({
    imports: [
        RouterModule
    ],
    declarations: [LoginComponent],
    exports: [LoginComponent]
})

export class LoginModule { }
