import { Component, OnInit, ViewChild } from '@angular/core';
import { MdSidenav } from '@angular/material';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @ViewChild('start')
  start: MdSidenav;

  constructor() { }

  ngOnInit() {

  }

  randomName(start: any) {
    console.log('OK');
    start.toggle();
  }

}
