import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class UserService {

  userList: FirebaseListObservable<any[]>;

  constructor(af: AngularFire) { }

}
