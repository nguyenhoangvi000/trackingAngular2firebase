import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MessagelistComponent } from './messagelist/index';
import { MessagelistModule } from "app/dashboard/chat/messagelist/messagelist.module";

// import { AboutComponent } from './index';

@NgModule({
    imports: [
        RouterModule,
        MessagelistModule
    ],
    declarations: [MessagelistComponent]
})

export class ChatModule { }
