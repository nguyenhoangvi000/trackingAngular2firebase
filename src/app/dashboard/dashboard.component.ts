import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { SidenavComponent } from './sidenav/sidenav.component';
import { Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router'
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { UserService } from './../services/userService/index';
import { LocalStorageService } from 'angular-2-local-storage';
import { MdDatepickerModule } from '@angular/material';


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

  constructor(private localStorage: LocalStorageService, private router: Router, private af: AngularFireAuth, private userService: UserService) {

    this.af.authState.subscribe((auth) => {
      if (auth == null) {
        console.log('Not Logged In');
        this.router.navigate(['/']);
        this.isLoggedIn = false;
        this.userService.loginMessage = "Bạn chưa đăng nhập";
      }
      else {
        localStorage.set("uid", this.af.auth.currentUser.uid);
        console.log('Logged In');
        this.router.navigate(['/dashboard/driver']);
        this.isLoggedIn = true;
      }
    })

  }


  ngOnInit() {

  }

  ngAfterViewInit() {

  }

}
