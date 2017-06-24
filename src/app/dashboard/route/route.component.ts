import { Component, OnInit } from '@angular/core';
import { MdDatepickerModule, MdDatepicker, MdDatepickerIntl } from '@angular/material';
import { UserService } from "../../services/userService/index";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { DriverService } from "../../services/driverService/index";
import { DatePickerOptions, DateModel } from 'ng2-datepicker';


@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.scss']
})
export class RouteComponent implements OnInit {



  driverList: any[];
  date: DateModel;
  options: DatePickerOptions;

  constructor(private af: AngularFireDatabase, private driverService: DriverService) {
    this.driverService = driverService;
    // this.driverList = driverService.getAllDriver();
    this.options = new DatePickerOptions();
  }

  ngOnInit() {
    this.driverService.getAllDriver().forEach(driver => {
      let index = 0;
      driver.forEach(element => {
        if (element.$key == localStorage.getItem("uid")) {
          driver.splice(index, 1);
        }
        index++;
      })

      this.driverList = driver;
    })
  }

  changeDriver(driver) {
    console.log(driver.$key);
  }



}
