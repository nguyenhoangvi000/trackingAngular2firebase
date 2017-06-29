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
    driverNameCurrent: String;

    driverList: any[];

    constructor(private localStorage: LocalStorageService, private af: AngularFireDatabase, private driverService: DriverService) {
        this.driverService = driverService;

        // this.uidCurrent = this.driverList.first().$key;
        // console.log(this.driverList.first());
    }

    ngOnInit() {
        this.driverService.getAllDriver().forEach(driver => {
            let index = 0;
            driver.forEach(element => {
                if (element.$key == localStorage.getItem("uid")) {
                    driver.splice(index, 1);
                }
                index++;
            })

            this.driverList = driver;

            console.log(this.driverList[1].$key);
            this.uidCurrent = "/messages/" + this.localStorage.get("uid") + "/" + this.driverList[1].$key;
            this.messages = this.af.list(this.uidCurrent.toString());
            this.messagesReverse = this.af.list("/messages/" + this.driverList[1].$key + "/" + this.localStorage.get("uid"));
        })
    }

    sendTest() {
        console.log(this.messageValue);
        let messageContent = { messageContent: this.messageValue, date: Date.now(), messagebubble: "S" };
        if (this.messageValue != "") {
            this.messages.push(messageContent);
            messageContent.messagebubble = "R";
            this.messagesReverse.push(messageContent);
            this.messageValue = "";
        }
    }

    send(to, message) {
        console.log(this.messageValue);
        let messageContent = { messageContent: this.messageValue, date: Date.now(), messagebubble: "S" };
        if (this.messageValue != "") {
            this.messages.push(messageContent);
            messageContent.messagebubble = "R";
            this.messagesReverse.push(messageContent);
            this.messageValue = "";
        }
    }

    changeDriver(driver) {

        this.uidCurrent = "/messages/" + this.localStorage.get("uid") + "/" + driver.$key;
        const driverNameCurrent = this.af.object("drivers/" + driver.$key);
        driverNameCurrent.subscribe(item => {
            this.driverNameCurrent = item.name;
        })
        this.messages = this.af.list(this.uidCurrent.toString());
        this.messagesReverse = this.af.list("/messages/" + driver.$key + "/" + this.localStorage.get("uid"));

    }

    onEnter() {
        console.log(this.messageValue);
        let messageContent = { messageContent: this.messageValue, date: Date.now(), messagebubble: "S" };
        if (this.messageValue != "") {
            this.messages.push(messageContent);
            messageContent.messagebubble = "R";
            this.messagesReverse.push(messageContent);
            this.messageValue = "";
        }
    }



}
