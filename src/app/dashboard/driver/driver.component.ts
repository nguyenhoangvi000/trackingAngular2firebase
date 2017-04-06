import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html'
})
export class DriverComponent implements OnInit {

  constructor(public dialog: MdDialog) { }

  openDialog(){
    let dialogRef=this.dialog.open(DialogResultExampleDialog);
  }

  ngOnInit() {
  }

}

@Component({
  selector: 'dialog-result-example-dialog',
  // templateUrl: './driver.component.html',
})
export class DialogResultExampleDialog {
  constructor(public dialogRef: MdDialogRef<DialogResultExampleDialog>) {}
}
