import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { DriverService } from '../../services/driverService/index';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';


@Component({
  selector: 'app-dialogedit',
  templateUrl: './dialogedit.component.html',
  styleUrls: ['./dialogedit.component.css']
})
export class DialogeditComponent implements OnInit {


  driverObject: FirebaseObjectObservable<any>;


  constructor(private driverService: DriverService, private af: AngularFireDatabase) { }

  ngOnInit() {
    const instantDriver = this.af.object("/drivers/" + this.driverService.idDriver);
    instantDriver.subscribe(item => {
      this.driverObject = item;
    })
  }



  // export class Driver {
  //   name: string;
  //   age: number;
  //   licensePlace: string;
  //   role: string;
  //   status: boolean;
  //   firstName: string;
  //   lastName: string;
  //   lastestMessage: string;
  //   dob: Date;
  //   carName: string;
  //   Email: string;

  //   constructor(values: Object = {}) {
  //     Object.assign(this, values);
  //   }

  //   getNameValue(): string {
  //     return this.name;
  //   }

}
