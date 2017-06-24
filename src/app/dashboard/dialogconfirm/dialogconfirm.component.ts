import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { DriverService } from '../../services/driverService/index';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-dialogconfirm',
  templateUrl: './dialogconfirm.component.html',
  styleUrls: ['./dialogconfirm.component.css']
})
export class DialogconfirmComponent implements OnInit {

  constructor(private toastCtrl: ToastsManager, private mdialogRef: MdDialogRef<any>, private driverService: DriverService) { }

  ngOnInit() {
  }

  delete() {
    this.driverService.removeDriver();
    this.toastCtrl.info("Xóa thành công", "Thông tin", {
      toastLife: 2000,
      showCloseButton: true,
      positionClass: "toast-bottom-right"
    })
    this.mdialogRef.close();
  }

  close() {
    this.mdialogRef.close();
  }

}
