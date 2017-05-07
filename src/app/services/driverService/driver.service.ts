import { Injectable } from '@angular/core';
// import { Driver } from '../../models/driver/';
import { FirebaseApp, FirebaseAuthState, AngularFire, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2';
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable()
export class DriverService {


  public idDriver: string;
  currentDriver: FirebaseListObservable<any[]>;


  constructor(private af: AngularFire, private localStorage: LocalStorageService) {
    this.currentDriver = af.database.list('/drivers');

  }

  logout() {
    this.af.auth.logout();
    this.af.auth.unsubscribe();
  }

  getAllDriver() {
    return this.currentDriver;
  }

  registerDriver(driver: Driver, Email: String) {

    this.af.auth.createUser({
      email: Email.toString(),
      password: "123456"
    }).then(response => {
      while (response == null) {
        setInterval(100);
      }
      this.idDriver = response.auth.uid.toString();
      this.localStorage.set("idDriver", this.idDriver);
      const newDriver = this.af.database.object('/drivers/' + this.idDriver);
      newDriver.set(driver);
      console.log(this.localStorage.get("idDriver"));
    })
  }

  // addDriver(driver: Driver, driverID: String) {
  //   this.currentDriver = this.af.database.list('/drivers' + driverID);
  //   console.log(driverID);
  //   this.currentDriver.push(driver);

  // }


  addDriver(driver: Driver, idDriver: any) {
    console.log('/drivers/' + this.idDriver.toString());
    const newDriver = this.af.database.object('/drivers/' + this.idDriver);
    newDriver.set(driver);
  }

  removeDriver() {
    this.currentDriver.remove(this.idDriver)
  }

}

export class Driver {
  name: string;
  age: number;
  licensePlace: string;
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

