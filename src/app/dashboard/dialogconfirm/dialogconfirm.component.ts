import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { DriverService } from '../../services/driverService/index';

@Component({
  selector: 'app-dialogconfirm',
  templateUrl: './dialogconfirm.component.html',
  styleUrls: ['./dialogconfirm.component.css']
})
export class DialogconfirmComponent implements OnInit {

  constructor(private mdialogRef: MdDialogRef<any>, private driverService: DriverService) { }

  ngOnInit() {
  }

  delete() {
    this.driverService.removeDriver();
    this.mdialogRef.close();
  }

  close() {
    this.mdialogRef.close();
  }

}
