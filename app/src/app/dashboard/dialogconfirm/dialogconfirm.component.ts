import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialogconfirm',
  templateUrl: './dialogconfirm.component.html',
  styleUrls: ['./dialogconfirm.component.css']
})
export class DialogconfirmComponent implements OnInit {

  constructor(private mdialogRef: MdDialogRef<any>) { }

  ngOnInit() {
  }

  close(){
    this.mdialogRef.close();
  }

}
