import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { LocalStorageService } from 'angular-2-local-storage';
import { Observable, Subject } from "rxjs/Rx";

@Injectable()
export class DriverService {

  private idDriverTemp: Subject<string>;
  public idDriver: string;
  currentDriver: FirebaseListObservable<any[]>;


  constructor(private af: AngularFireDatabase, private afAuth: AngularFireAuth, private localStorage: LocalStorageService) {
    this.idDriverTemp = new Subject<string>();
    this.currentDriver = af.list('/drivers');

  }

  logout() {
    this.afAuth.auth.signOut();
    // this.afAuth.auth.app;
  }

  getAllDriver() {
    return this.currentDriver;
  }


  passingDriverId(driverID: string): void {
    this.idDriverTemp.next(driverID);
  }

  onPassingDriverID(): Observable<string> {
    return this.idDriverTemp;
  }

  // getAllDriver(): Promise<FirebaseListObservable<any[]>> {
  //   return new Promise(resolve => {
  //     setTimeout(() => resolve(this.currentDriver), 1000);
  //   })
  // }

  registerDriver(driver: Driver, Email: String) {

    this.afAuth.auth.createUserWithEmailAndPassword(
      Email.toString(),
      "123456"
    ).then(response => {
      while (response == null) {
        setInterval(100);
      }
      console.log(response);
      this.idDriver = response.uid.toString();
      // this.localStorage.set("idDriver", this.idDriver);
      const newDriver = this.af.object('/drivers/' + this.idDriver);
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
    const newDriver = this.af.object('/drivers/' + this.idDriver);
    newDriver.set(driver);
  }

  removeDriver() {
    this.currentDriver.remove(this.idDriver);
    this.afAuth.auth.currentUser.delete();
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

