import { Component, OnInit, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'; import { DriverService } from '../../services/driverService/index';
import { DialogComponent } from '../dialog/dialog.component';
import { DialogconfirmComponent } from '../dialogconfirm/index';
import { DialogchatComponent } from '../dialogchat/index';
import { DialogeditComponent } from '../dialogedit/index';
import { UserService } from '../../services/userService/index';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html'
})



export class DriverComponent implements OnInit {


  rows = [];
  elementsID = [];
  driverTemp: any;
  isDataAvailable: boolean = false;


  driverCurrents: FirebaseListObservable<any[]>;

  constructor(private localStorage: LocalStorageService, public dialog: MdDialog, af: AngularFireDatabase, private driverService: DriverService) {

  }

  openDialog() {

    let dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe((result: string) => {

    });
  }

  edit(key) {
    console.log(key);
    let dialogRef = this.dialog.open(DialogeditComponent);

  }

  chat() {

    let dialogRef = this.dialog.open(DialogchatComponent);
  }

  delete(value) {
    console.log(value);
    this.driverService.idDriver = value;
    let dialogRef = this.dialog.open(DialogconfirmComponent);
  }

  ngOnInit() {
    console.log(localStorage.getItem("uid"));
    this.driverService.getAllDriver().forEach(driver => {
      while (driver == null) {
        setInterval(10);
      }

      let index = 0;
      driver.forEach((item) => {
        if (item.$key == localStorage.getItem("uid")) {
          driver.splice(index, 1);
          console.log("It's work");
        }
        else {
          this.elementsID.push(item.$key);
        }
        index++;
      })
      this.rows = driver;

      let length = index;
      for (var index1 = 0; index1 < length; index1++) {
        this.rows[index1].id = index1 + 1;
      }

      this.isDataAvailable = true;
    });
  }


}