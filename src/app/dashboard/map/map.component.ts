import { Component, OnInit, NgZone, Input, OnChanges, SimpleChanges, ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { SebmGoogleMap, SebmGoogleMapPolygon, LatLngLiteral } from 'angular2-google-maps/core';
import { DriverService } from '../../services/driverService/index';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Observable, Subject } from "rxjs/Rx";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  geolocationCurrents: any[];
  geolocation: FirebaseListObservable<any[]>;
  // geolocationCurrents: FirebaseListObservable<any[]>;
  driverCurrents: any[];


  @Input('driverID') driverID: string;

  currentLat: number = 0;
  currentLng: number = 0;

  constructor(public toastr: ToastsManager, vcr: ViewContainerRef, public dialog: MdDialog, private af: AngularFireDatabase, private driverService: DriverService, private ngZone: NgZone) {

    this.toastr.setRootViewContainerRef(vcr);
    // this.geolocationCurrents = af.database.list('/geolocationCurrents')

    // this.driverCurrents = driverService.getAllDriver();

    // navigator.geolocation.getCurrentPosition(function (location) {
    //   this.currentLat = location.coords.latitude;
    //   this.currentLng = location.coords.longitude;
    // });
    // console.log(driverService);

  }


  // ngOnInit(): void {
  //   console.log("Da nhay vao onInit");

  //   this.driverService.onPassingDriverID().subscribe((driverID) => {
  //     console.log(driverID);
  //     var driverKey = '/geolocationCurrents/' + driverID;
  //     console.log(driverKey);
  //     this.geolocationCurrents = this.af.list(driverKey);

  //     let positionCurrent = this.af.object(driverKey, { preserveSnapshot: true });
  //     positionCurrent.subscribe(snapshot => {
  //       let currentPos = [];
  //       snapshot.forEach(element => {
  //         console.log(element);
  //         currentPos.push(element);
  //       });

  //       console.log(currentPos[currentPos.length - 1]);

  //       this.currentLat = currentPos[currentPos.length - 1].val().lat;
  //       this.currentLng = currentPos[currentPos.length - 1].val().lng;

  //       console.log(this.currentLat);
  //       console.log(this.currentLng);

  //     })
  //   })


  // }


  ngOnInit(): void {
    console.log(this.driverID);
    console.log("Da nhay vao ngInit");


    const allGeolocation = this.af.list("/geolocationCurrents/" + this.driverID, {
      query: {
        limitToLast: 1
      }
    });

    this.driverService.onPassingDriverID().subscribe((driverID) => {
      console.log(driverID);
      var driverKey = '/geolocationCurrents/' + driverID;
      console.log(driverKey);
      // this.geolocationCurrents = this.af.list(driverKey);

      let positionCurrent = this.af.list(driverKey, {
        query: {
          limitToLast: 1
        }
      });
      positionCurrent.subscribe(snapshot => {


        try {
          // positionCurrent = this.af.list(driverKey + snapshot[0].$key);
          console.log(driverKey + "/" + snapshot[0].$key);

          let positionCurrentItem = this.af.list(driverKey + "/" + snapshot[0].$key, {
            preserveSnapshot: true,
            query: {
              limitToLast: 1
            }
          });

          positionCurrentItem.subscribe(result => {
            // result.forEach(item => {
            //   console.log(item.val());
            // })

            this.currentLat = result[result.length - 1].val().lat;
            this.currentLng = result[result.length - 1].val().lng;


          })
        } catch (error) {
          this.toastr.error(error, "Lỗi", {
            positionClass: 'toast-bottom-right',
            showCloseButton: true
          })
        }
        // positionCurrentItem.subscribe(item => {
        //   console.log(item[0].val());
        // })

        // if (snapshot != null) {
        //   // let currentPos = [];
        //   // snapshot.forEach(element => {
        //   //   console.log(element);
        //   //   currentPos.push(element);
        //   // });
        //   try {
        //     console.log(snapshot[snapshot.length - 1]);

        //     console.log(snapshot);

        // this.currentLat = snapshot[snapshot.length - 1].val().lat;
        // this.currentLng = snapshot[snapshot.length - 1].val().lng;

        //     console.log(this.currentLat);
        //     console.log(this.currentLng);
        //   } catch (error) {
        //     console.log(error);
        //     console.log("Da nhay vao catch");
        //     this.toastr.error("Có gì đó không ổn", "Lỗi", {
        //       positionClass: 'toast-bottom-right',
        //       showCloseButton: true
        //     })

        //   }
        // }
        // else {
        //   // let dialogRef = this.dialog.open();
        // }
      })

    })


  }





  // changeDriver(driver) {
  //   console.log(driver.$key);
  //   var driverKey = '/geolocationCurrents/' + driver.$key;
  //   this.geolocationCurrents = this.af.database.list(driverKey);
  //   console.log(driverKey);

  //   const positionCurrent = this.af.database.object(driverKey, { preserveSnapshot: true });
  //   positionCurrent.subscribe(snapshot => {
  //     let currentPos = [];
  //     snapshot.forEach(element => {
  //       currentPos.push(element);
  //     }).then(function () {
  //       this.currentLat = currentPos[currentPos.length - 1].val().lat;
  //       this.currentLng = currentPos[currentPos.length - 1].val().lng;
  //     });



  //   })

  //   // navigator.geolocation.watchPosition((position) => {
  //   //   this.currentLat = position.coords.latitude;
  //   //   this.currentLng = position.coords.longitude;
  //   //   console.log(this.currentLat + ":" + this.currentLng);
  //   // })

  // }

}



