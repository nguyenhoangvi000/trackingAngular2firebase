import { Component, OnInit, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { DriverService } from '../../services/driverService/index';
import { DialogComponent } from '../dialog/dialog.component';
import { DialogconfirmComponent } from '../dialogconfirm/index';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html'
})
export class DriverComponent implements OnInit {

  rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
  ];
  columns = [
    { prop: 'Name' },
    { name: 'Gender' },
    { name: 'Company' }
  ];

  //rows: any[];

  driverCurrents: FirebaseListObservable<any[]>;

  constructor(public dialog: MdDialog, af: AngularFire, driverService: DriverService) {
    var rowTemps = this.rows;
    driverService.getAllDriver().forEach(driver => ({

    }))

  }

  openDialog() {
    // let dialogRef = this.dialog.open(DialogResultExampleDialog);

    let dialogRef = this.dialog.open(DialogComponent);


    dialogRef.afterClosed().subscribe((result: string) => {

    });

  }

  delete() {
    console.log('ok');
    let dialogRef = this.dialog.open(DialogconfirmComponent);
  }

  ngOnInit() {
  }

}

@Component({
  selector: 'dialog-result-adddriver',
  template: `<p>It's Jazz!</p>
  <p><label>How much? <input #howMuch></label></p>
  <p> {{ data.message }} </p>
  <button type="button" (click)="dialogRef.close(howMuch.value)">Close dialog</button>
  <button (click)="togglePosition()">Change dimensions</button>`

})
export class DialogResultExampleDialog {
  private _dimesionToggle = false;

  constructor(
    public dialogRef: MdDialogRef<DialogResultExampleDialog>,
    @Inject(MD_DIALOG_DATA) public data: any) { }

  togglePosition(): void {
    this._dimesionToggle = !this._dimesionToggle;

    if (this._dimesionToggle) {
      this.dialogRef
        .updateSize('500px', '500px')
        .updatePosition({ top: '25px', left: '25px' });
    } else {
      this.dialogRef
        .updateSize()
        .updatePosition();
    }
  }
}
