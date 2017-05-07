import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// import { LoginComponent } from './login.component';
import { DashboardComponent } from './../dashboard/index';

@NgModule({
    imports: [
        RouterModule
    ],
    declarations: [DashboardComponent],
})

export class LoginModule { }
