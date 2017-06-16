import { Injectable } from "@angular/core";
import { FirebaseApp, FirebaseAuthState, AngularFire, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2';
import { LocalStorageService } from 'angular-2-local-storage';
import { Observable, Subject } from "rxjs/Rx";

@Injectable()
export class ChatService {

    currentDriver: FirebaseListObservable<any[]>;

    constructor(private af: AngularFire, private locaStorage: LocalStorageService) {

    }

    sendMessage(toUser, message) {
        const currentDriverMessageSend = this.af.database.object('/messages/' + localStorage.getItem("uid") + "/" + toUser);
        const currentDriverMessageReceive = this.af.database.object('/messages/' + toUser + "/" + localStorage.getItem("uid"));
        currentDriverMessageSend.set(message);
        currentDriverMessageReceive.set(message);
    }
}