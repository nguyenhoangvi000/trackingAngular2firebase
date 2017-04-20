import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';
import { Http, Headers } from '@angular/http'

@Injectable()
export class UserService {

  isLoggedin: boolean;
  userList: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire, private _http: Http) { }

}
