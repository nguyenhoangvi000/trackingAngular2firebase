import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html'
})
export class DriverComponent implements OnInit {

  constructor(public dialog: MdDialog, af: AngularFire) { }

  openDialog() {
    let dialogRef = this.dialog.open(DialogResultExampleDialog);
  }

  ngOnInit() {
  }

}

@Component({
  selector: 'dialog-result-example-dialog',
  // templateUrl: './driver.component.html',
})
export class DialogResultExampleDialog {
  constructor(public dialogRef: MdDialogRef<DialogResultExampleDialog>) { }
}
