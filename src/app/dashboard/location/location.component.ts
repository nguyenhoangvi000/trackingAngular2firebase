import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DriverService } from '../../services/driverService/index';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  driverCurrents: any[];

  constructor(private router: Router, private driverService: DriverService) {
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
        // this.driverService.onPassingDriverID(this.driverCurrents[0].$key);
        console.log(this.driverCurrents[0].$key);
        this.driverService.passingDriverId(this.driverCurrents[0].$key);
      })
    }
  }

}
