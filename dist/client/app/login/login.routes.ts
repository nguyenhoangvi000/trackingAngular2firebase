import { Route } from '@angular/router';
import { LoginComponent } from './index';
import { DashboardComponent, DashboardRoutes } from '../dashboard/index';

export const LoginRoutes: Route[] = [
	{
		path: '', component: LoginComponent, children: [
			...DashboardRoutes
		]

	},
	// {
	// 	path: '/dashboard', component: DashboardComponent,

	// },
];
