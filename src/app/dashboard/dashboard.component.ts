import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { SidenavComponent } from './sidenav/sidenav.component';


import { MdSidenav } from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit, AfterViewInit {

  @ViewChild('app-sidenav')
  sidenav: SidenavComponent;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // this.start.open();
  }

}
