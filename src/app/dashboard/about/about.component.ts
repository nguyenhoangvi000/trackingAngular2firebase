import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { UserService } from "../../services/userService/index";
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  // constructor(private af: AngularFire, private router: Router) { }
  constructor(private af: AngularFireAuth, private userService: UserService) { }

  ngOnInit() {

  }

  logout() {
    this.userService.logout();
  }

}
