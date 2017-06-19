import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessagebubbleComponent } from './messagebubble/index';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { UserService } from "../../services/userService/index";
import { DriverService } from "../../services/driverService/index";
// import { ChatService } from "../../services/chatService/index";
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

    messages: FirebaseListObservable<any[]>;
    messagesReverse: FirebaseListObservable<any[]>;
    messageValue: String = "";
    uidCurrent: String = "";

    driverList: FirebaseListObservable<any[]>;

    constructor(private localStorage: LocalStorageService, private af: AngularFireDatabase, private driverService: DriverService) {
        this.driverService = driverService;
        this.driverList = driverService.getAllDriver();
        // this.uidCurrent = this.driverList.first().$key;
        console.log(this.driverList.first());
    }

    ngOnInit() {
        
    }

    sendTest() {
        console.log(this.messageValue);
        let messageContent = { messageContent: this.messageValue };
        if (this.messageValue != "") {
            this.messages.push(messageContent);
            this.messagesReverse.push(messageContent);
            this.messageValue = "";
        }
    }

    send(to, message) {
        console.log(this.messageValue);
        let messageContent = { messageContent: this.messageValue };
        if (this.messageValue != "") {
            this.messages.push(messageContent);
            this.messageValue = "";
        }
    }

    changeDriver(driver) {

        this.uidCurrent = "/messages/" + this.localStorage.get("uid") + "/" + driver.$key;
        console.log(this.uidCurrent);
        this.messages = this.af.list(this.uidCurrent.toString());
        this.messagesReverse = this.af.list("/messages/" + driver.$key + "/" + this.localStorage.get("uid"));

    }

    onEnter() {
        console.log(this.messageValue);
        let messageContent = { messageContent: this.messageValue };
        if (this.messageValue != "") {
            this.messages.push(messageContent);
            this.messagesReverse.push(messageContent);
            this.messageValue = "";
        }
    }



}
