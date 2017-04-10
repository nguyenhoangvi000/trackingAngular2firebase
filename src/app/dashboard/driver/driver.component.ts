import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { DriverService } from '../../services/driverService/index';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html'
})
export class DriverComponent implements OnInit {

  columns = [
    { prop: 'Họ và tên' },
    { name: 'Tuổi' },
  ];

  rows: any[];

  driverCurrents: FirebaseListObservable<any[]>;

  constructor(public dialog: MdDialog, af: AngularFire, driverService: DriverService) {
    var rowTemps = this.rows;
    driverService.getAllDriver().forEach(driver => (
      {

      }
    ))

  }

  openDialog() {
    let dialogRef = this.dialog.open(DialogResultExampleDialog, {
      height: '400px',
      width: '600px',
    });
  }

  ngOnInit() {
  }

}

@Component({
  selector: 'dialog-result-example-dialog',
  
})
export class DialogResultExampleDialog {
  constructor(public dialogRef: MdDialogRef<DialogResultExampleDialog>) { }
}
