import { Route } from "@angular/router";
import { SidenavComponent } from "./index";
import { MapComponent } from "./../map/index";
import { DriverComponent } from "./../driver/index";
import { AboutComponent } from "./../about/index";
import { LocationComponent } from "./../location/index";
import { ChatComponent } from "./../chat/index";

export const SidenavRoutes: Route[] = [
    {
        path: "sidenav",
        component: SidenavComponent,
        children: [
            { path: 'about', component: AboutComponent },
            { path: 'driver', component: DriverComponent },
            { path: 'location', component: LocationComponent },
            { path: 'chat', component: ChatComponent }
        ]
    },
];
