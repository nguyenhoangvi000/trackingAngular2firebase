import { Route } from "@angular/router";
import { LocationComponent } from "./index";
import { MapComponent } from "./../map/index";
import { DriverlistComponent } from "./../driverlist/index";



export const LocationRoutes: Route[] = [
    {
        path: "location",
        component: LocationComponent
    }
];