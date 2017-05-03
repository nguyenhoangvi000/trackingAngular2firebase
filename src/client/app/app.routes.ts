import { Routes } from '@angular/router';

import { LoginRoutes } from './login/index';
import { DashboardRoutes, DashboardComponent } from './dashboard/index';
import { DriverComponent } from './dashboard/driver/index';
import { MapComponent } from './dashboard/map/index';
import { AboutComponent } from './dashboard/about/index';

import { LoginComponent } from './login/index';
import { PageNotFoundComponent } from './app.component';

export const routes: Routes = [
    // ...LoginRoutes,
    // ...DashboardRoutes,
    // { path: '**', component: LoginComponent }
    {
        path: '', component: LoginComponent
    },
    {
        path: 'dashboard', component: DashboardComponent, children: [
            { path: 'about', component: AboutComponent },
            { path: 'driver', component: DriverComponent },
            { path: 'maps', component: MapComponent }
        ]
    },
    { path: '**', component: PageNotFoundComponent }
];