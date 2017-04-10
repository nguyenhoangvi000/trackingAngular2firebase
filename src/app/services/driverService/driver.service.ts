import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Driver } from '../../models/driver';

@Injectable()
export class DriverService {

  currentDriver: FirebaseListObservable<any[]>;


  constructor(private af: AngularFire, ) {
    this.currentDriver = af.database.list('/drivers');

  }

  getAllDriver() {
    return this.currentDriver;
  }

  addDriver(driver: Driver) {
    this.currentDriver.push(driver);
  }

  removeDriver(driver:Driver){
    
  }

}
