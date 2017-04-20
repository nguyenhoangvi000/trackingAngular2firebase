import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/userService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private _service: UserService, private _router: Router) { }




  ngOnInit() {
  }

}
