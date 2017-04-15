import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(public dialogRef: MdDialogRef<any>) { }

  ngOnInit() {

  }

  addDriver(driverId) {

  }


  editDriver(driverId) {

  }


  getDriver(driverId) {

  }

  close() {
    console.log('ok');
    this.dialogRef.close();
  }

}
