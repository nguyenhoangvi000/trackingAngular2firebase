import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire } from 'angularfire2';
import { UserService } from "../../services/userService/index";
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  // constructor(private af: AngularFire, private router: Router) { }
  constructor(private af: AngularFire, private userService: UserService) { }

  ngOnInit() {

  }

  logout() {
    this.userService.logout();
  }

}
