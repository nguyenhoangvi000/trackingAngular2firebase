import { Component, OnInit, ViewChild } from '@angular/core';
import { MdSidenav } from '@angular/material';
import { Router } from '@angular/router';
import { UserService } from '../../services/userService/index';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @ViewChild('start')
  start: MdSidenav;

  constructor(private userService: UserService, private router: Router) { }

  logout() {
    this.userService.logout();
  }

  ngOnInit() {

  }



  randomName(start: any) {
    console.log('OK');
    start.toggle();
  }

}
