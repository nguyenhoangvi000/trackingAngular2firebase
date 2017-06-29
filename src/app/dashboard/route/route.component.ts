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
  dateList: any[];
  driverKey: String;
  // date: DateModel;
  // options: DatePickerOptions;
  selectedDate: Date;

  geolocationCurrents: any[];


  driverName: String;

  currentLat: number;
  currentLng: number;

  constructor(private af: AngularFireDatabase, private driverService: DriverService) {
    this.driverService = driverService;
    // this.driverList = driverService.getAllDriver();
    // this.options = new DatePickerOptions();
  }

  ngOnInit() {
    this.selectedDate = new Date();
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

  onChange($event) {
    // console.log(this.formatDate($event));
    console.log((new Date($event).getTime() / 1000));
    // var dateTime = new Date(1498294462857);
    var dateTime = new Date(($event).getTime() / 1000);
    console.log(dateTime.toLocaleDateString());
  }

  changeDriver(driver) {
    this.driverKey = driver.$key;
    const resultDateList = this.af.list("geolocationCurrents/" + driver.$key, {
      query: {
        orderByChild: 'timestamp'
      }
    });
    resultDateList.forEach(item => {

      this.dateList = item;

      this.dateList.forEach(resultItem => {
        resultItem = new Date(resultItem);
      })
    })
  }

  changeDate(value) {
    const resultDriver = this.af.object("drivers/" + this.driverKey);
    resultDriver.subscribe(item => {
      this.driverName = item.name;
    })


    this.geolocationCurrents = Object.keys(value).map((key) => value[key]);
    console.log(this.geolocationCurrents.length);
    this.currentLat = this.geolocationCurrents[this.geolocationCurrents.length - 1].lat;
    this.currentLng = this.geolocationCurrents[this.geolocationCurrents.length - 1].lng;
    console.log(this.geolocationCurrents);
  }

  formatDate(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear() + "  " + strTime;
  }
}
