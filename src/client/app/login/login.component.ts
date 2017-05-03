import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/userService';
import { Router } from '@angular/router';
import { FirebaseApp, AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(private _service: UserService, private af: AngularFire, private _router: Router) { }

  login() {
    this.af.auth.login({
      email: this.email,
      password: this.password
    }, {
        provider: AuthProviders.Password,
        method: AuthMethods.Password
      }).then((success) => {
        this._router.navigate(['/dashboard'])
      }).catch((err) => {
        console.log(err);
        console.log("No nhay vo cho nay ne");
      })
  }


  ngOnInit() {
  }

}
