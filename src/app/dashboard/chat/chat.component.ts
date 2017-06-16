import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessagebubbleComponent } from './messagebubble/index';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { UserService } from "../../services/userService/index";
import { DriverService } from "../../services/driverService/index";
import { ChatService } from "../../services/chatService/index";
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

    messages: Array<String> = [];
    messageValue: String = "";
    uidCurrent: String = "";

    driverList: FirebaseListObservable<any[]>;

    constructor(private localStorage: LocalStorageService, private af: AngularFire, private driverService: DriverService, private chatService: ChatService) {
        this.driverService = driverService;
        this.driverList = driverService.getAllDriver();
        // this.uidCurrent = this.driverList.first().$key;
        console.log(this.driverList.first());
    }

    ngOnInit() {

    }

    sendTest() {
        console.log(localStorage.getItem("uid"));
        if (this.messageValue != "") {
            this.messages.push(new String(this.messageValue));
            this.messageValue = "";
        }

    }

    send(to, message) {
        this.chatService.sendMessage(this.uidCurrent, this.messageValue);
        console.log(this.messageValue);
        if (this.messageValue != "") {
            this.messages.push(new String(this.messageValue));
            this.messageValue = "";
        }

    }

    changeDriver(driver) {
        this.uidCurrent = driver.$key;
        console.log(this.uidCurrent);
        let messageKey = "/messages/" + driver.$key;
        let messageList = this.af.database.list(messageKey);
        messageList.forEach(element => {

        })
    }

    onEnter() {
        this.chatService.sendMessage(this.uidCurrent, this.messageValue);
        console.log(this.messageValue);
        // console.log(localStorage.getItem("uid"));
        // console.log(message);
        if (this.messageValue != "") {
            this.messages.push(new String(this.messageValue));
            this.messageValue = "";
        }
    }



}
