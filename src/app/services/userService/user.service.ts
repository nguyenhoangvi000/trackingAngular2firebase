import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class UserService {

  isLoggedin: boolean;
  userID: any;
  loginMessage: string;
  userList: FirebaseListObservable<any[]>;

  constructor(private af: AngularFireAuth, private _http: Http, private router: Router) { }

  canActive(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.af.authState.map((auth) => {
      if (auth != null) {
        return false;
      }
      else {
        return true;
      }
    });
  }

  logout() {
    this.af.auth.signOut();
    // this.af.authState.subscribe
    // console.log(this.af.auth.subscribe());
    this.router.navigate(['/']);
  }



}
