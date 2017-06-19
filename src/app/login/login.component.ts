import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/userService';
import { Router } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
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

  constructor(private localStorage: LocalStorageService, private _service: UserService, private afAuth: AngularFireAuth, private _router: Router, private userService: UserService) {
    this.afAuth.auth.signOut();
    this.loginInfo = this.userService.loginMessage;
  }

  login() {

    this.afAuth.auth.signInWithEmailAndPassword(
      this.email,
      this.password
    ).then(success => {
      // console.log(success.auth.uid);
      console.log(this.afAuth.auth.currentUser.uid);
      localStorage.setItem("uid", this.afAuth.auth.currentUser.uid);
      this._router.navigate(['/dashboard/chat']);
    }).catch((err) => {
      console.log(err);
      // this._router.navigate(['/']);
      console.log("No nhay vo cho nay ne");
    })

    // this.afAuth.login({
    //   email: this.email,
    //   password: this.password
    // }, {
    //     provider
    //     method: AuthMethods.Password
    //   }).then((success) => {
    //     console.log(success.auth.uid);
    //     localStorage.setItem("uid", success.auth.uid);
    //     this._router.navigate(['/dashboard/location'])
    //   }).catch((err) => {
    //     console.log(err);
    //     console.log("No nhay vo cho nay ne");
    //   })

    // this.af.auth.login({
    //   email: this.email,
    //   password: this.password
    // }, {
    //     provider: AuthProviders.Password,
    //     method: AuthMethods.Password
    //   }).then((success) => {
    //     console.log(success.auth.uid);
    //     localStorage.setItem("uid", success.auth.uid);
    //     this._router.navigate(['/dashboard/location'])
    //   }).catch((err) => {
    //     console.log(err);
    //     console.log("No nhay vo cho nay ne");
    //   })
  }


  ngOnInit() {
  }

}
