import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-messagebubble',
    templateUrl: './messagebubble.component.html',
    styleUrls: ['./messagebubble.component.scss']

})
export class MessagebubbleComponent implements OnInit {

    @Input()
    data: Array<String> = [];

    // constructor(private af: AngularFire, private router: Router) { }
    constructor() { }

    ngOnInit() {

    }

}
