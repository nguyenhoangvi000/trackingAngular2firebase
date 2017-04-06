import { Route } from "@angular/router";

import { MapRoutes } from "./map/index";
import { DriverRoutes } from "./driver/index";
import { AboutRoutes } from "./about/index";
import { SidenavRoutes } from "./sidenav/index";
import { TopnavRoutes } from "./topnav/index";

import { DashboardComponent } from "./index";

export const DashboardRoutes: Route[] = [
    {
        path: "dashboard",
        component: DashboardComponent,
        children: [
            ...MapRoutes,
            ...DriverRoutes,
            ...AboutRoutes,
            ...SidenavRoutes,
            ...TopnavRoutes
        ]
    }
];