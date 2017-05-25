import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessagebubbleComponent } from './messagebubble/index';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { UserService } from "../../services/userService/index";
import { DriverService } from "../../services/driverService/index";

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

    messages: Array<String> = [];
    messageValue: String = "";

    driverList: FirebaseListObservable<any[]>;

    constructor(private af: AngularFire, private driverService: DriverService) {
        this.driverService = driverService;
        this.driverList = driverService.getAllDriver();
    }

    ngOnInit() {

    }

    send(message) {
        console.log(message);
        if (this.messageValue != "") {
            this.messages.push(new String(this.messageValue));
            this.messageValue = "";
        }

    }



}
