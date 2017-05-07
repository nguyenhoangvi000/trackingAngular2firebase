import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { SidenavComponent } from './sidenav/sidenav.component';
import { Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router'
import { AuthProviders, AuthMethods, AngularFire } from 'angularfire2';
import { UserService } from './../services/userService/index';


import { MdSidenav } from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  public isLoggedIn = false;
  

  @ViewChild('app-sidenav')
  sidenav: SidenavComponent;

  constructor(private router: Router, private af: AngularFire, private userService: UserService) {

    this.af.auth.subscribe((auth) => {
      if (auth == null) {
        console.log('Not Logged In');
        this.router.navigate(['']);
        this.isLoggedIn = false;
        this.userService.loginMessage = "Bạn chưa đăng nhập";
      }
      else {
        console.log('Logged In');
        this.router.navigate(['/dashboard/maps']);
        this.isLoggedIn = true;
      }
    })

  }


  ngOnInit() {

  }

  ngAfterViewInit() {

  }

}
