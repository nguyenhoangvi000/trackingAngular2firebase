import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { DriverService } from '../../services/driverService/index';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {


  @Output() driver: EventEmitter<Driver> = new EventEmitter<Driver>();
  driverObject: Driver = new Driver({
    name: "",
    age: "",
    licensePlace: "",
    dob: ""
  });




  constructor(public dialogRef: MdDialogRef<any>, private driverService: DriverService) { }

  ngOnInit() {

  }

  addDriver() {
    if (this.driverObject.age != null || this.driverObject.dob != null || this.driverObject.licensePlace != "" || this.driverObject.name != null) {
      this.driverService.addDriver(this.driverObject);
      this.driverObject = new Driver();
    }

  }

  changeDriverName(event) {
    this.driverObject.name = event.target.value;
  }

  changeDriverAge(event) {
    this.driverObject.age = event.target.value;
  }

  changeDriverLisenceNumber(event) {
    this.driverObject.licensePlace = event.target.value;
  }

  changeDriverDateofBirth(event) {
    this.driverObject.dob = event.target.value;
  }


  editDriver(driverId) {

  }


  getDriver(driverId) {

  }

  close() {
    this.dialogRef.close();
  }

}


export class Driver {
  name: string;
  age: number;
  licensePlace: string;
  dob: Date;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

  getNameValue(): string {
    return this.name;
  }

}
