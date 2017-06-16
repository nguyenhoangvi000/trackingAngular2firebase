import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/userService/index";
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { DriverService } from "../../services/driverService/index";
import { DatePickerOptions, DateModel } from 'ng2-datepicker';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.scss']
})
export class RouteComponent implements OnInit {

  driverList: FirebaseListObservable<any[]>;
  date: DateModel;
  options: DatePickerOptions;

  constructor(private af: AngularFire, private driverService: DriverService) {
    this.driverService = driverService;
    this.driverList = driverService.getAllDriver();
    this.options = new DatePickerOptions();
  }

  ngOnInit() {
  }

  changeDriver(driver) {

  }

}
