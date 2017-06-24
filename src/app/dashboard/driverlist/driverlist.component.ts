import { Component, OnInit, NgZone } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { SebmGoogleMap, SebmGoogleMapPolygon, LatLngLiteral } from 'angular2-google-maps/core';
import { DriverService } from '../../services/driverService/index';

@Component({
  selector: 'driverlist',
  templateUrl: './driverlist.component.html',
  styleUrls: ['./driverlist.component.css']
})
export class DriverlistComponent implements OnInit {

  geolocationCurrents: FirebaseListObservable<any[]>;
  // driverCurrents: FirebaseListObservable<any[]>;
  driverCurrents: any[];

  driverID: string = '';


  currentLat: number;
  currentLng: number;

  constructor(private af: AngularFireDatabase, private driverService: DriverService, private ngZone: NgZone) {
    // console.log(driverService);
  }

  ngOnInit() {
    if (this.driverCurrents == null) {
      // this.driverCurrents = this.driverService.getAllDriver();
      this.driverService.getAllDriver().forEach(driver => {
        let index = 0;
        driver.forEach(element => {
          if (element.$key == localStorage.getItem("uid")) {
            driver.splice(index, 1);
          }
          index++;
        })

        this.driverCurrents = driver;
      })
    }
  }

  changeDriver(driver) {
    // console.log(driver.$key);
    let driverKey = '/geolocationCurrents/' + driver.$key;
    this.driverService.passingDriverId(driver.$key);
  }

  // changeDriver(driver) {
  //   // console.log(driver.$key);
  //   let driverKey = '/geolocationCurrents/' + driver.$key;
  //   this.driverService.passingDriverId(driver.$key);
  //   this.geolocationCurrents = this.af.list(driverKey);
  //   console.log(driverKey);

  //   let positionCurrent = this.af.object(driverKey, { preserveSnapshot: true });
  //   positionCurrent.subscribe(snapshot => {
  //     let currentPos = [];
  //     snapshot.forEach(element => {
  //       currentPos.push(element);
  //     })

  //     if (currentPos != null) {
  //       this.currentLat = currentPos[currentPos.length - 1].val().lat;
  //       this.currentLng = currentPos[currentPos.length - 1].val().lng;
  //     };
  //   })

  //   // navigator.geolocation.watchPosition((position) => {
  //   //   this.currentLat = position.coords.latitude;
  //   //   this.currentLng = position.coords.longitude;
  //   //   console.log(this.currentLat + ":" + this.currentLng);
  //   // })

  // }

}
