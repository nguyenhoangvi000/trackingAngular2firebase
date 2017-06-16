import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/userService';
import { Router } from '@angular/router';
import { FirebaseApp, AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { FormsModule } from '@angular/forms';
import { LocalStorageService } from 'angular-2-local-storage';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  loginInfo: String;

  constructor(private localStorage: LocalStorageService, private _service: UserService, private af: AngularFire, private _router: Router, private userService: UserService) {
    this.af.auth.logout();
    this.loginInfo = this.userService.loginMessage;
  }

  login() {
    this.af.auth.login({
      email: this.email,
      password: this.password
    }, {
        provider: AuthProviders.Password,
        method: AuthMethods.Password
      }).then((success) => {
        console.log(success.auth.uid);
        localStorage.setItem("uid", success.auth.uid);
        this._router.navigate(['/dashboard/location'])
      }).catch((err) => {
        console.log(err);
        console.log("No nhay vo cho nay ne");
      })
  }


  ngOnInit() {
  }

}
