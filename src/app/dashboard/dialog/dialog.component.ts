import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { DriverService } from '../../services/driverService/index';
import { LocalStorageService } from 'angular-2-local-storage';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

// import { Driver } from '../../models/driver/';


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
    status: false,
    firstName: "",
    lastName: "",
    lastestMessage: "",
    role: "driver",
    dob: "",
    carName: "",
    Email: ""
  });

  driverID: any;




  constructor(private toastCtrl: ToastsManager,public dialogRef: MdDialogRef<any>, private driverService: DriverService, private localStorage: LocalStorageService) { }

  ngOnInit() {

  }

  addDriver() {
    console.log('Vao trong add roi ne');
    if (this.driverObject.age != null || this.driverObject.dob != null || this.driverObject.licensePlace != "" || this.driverObject.name != null) {

      this.driverService.registerDriver(this.driverObject, this.driverObject.Email);
      this.driverObject = new Driver();
    }
    this.close();
  }

  changeCarName(event) {
    this.driverObject.carName = event.target.value;
  }

  changeEmail(event) {
    this.driverObject.Email = event.target.value;
  }

  changeDriverName(event) {
    this.driverObject.name = event.target.value;
  }

  changeDriverFirstName(event) {
    this.driverObject.firstName = event.target.value;
  }

  changeDriverLastName(event) {
    this.driverObject.lastName = event.target.value;
  }

  changeDriverAge(event) {
    this.driverObject.age = event.target.value;
  }

  changeDriverLisenceNumber(event) {
    this.driverObject.licensePlace = event.target.value;
  }
  ;
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
  role: string;
  status: boolean;
  firstName: string;
  lastName: string;
  lastestMessage: string;
  dob: Date;
  carName: string;
  Email: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

  getNameValue(): string {
    return this.name;
  }

}
