import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MdSidenav } from '@angular/material';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit, AfterViewInit {
  @ViewChild('start')
  start: MdSidenav;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.start.open();
  }

}
