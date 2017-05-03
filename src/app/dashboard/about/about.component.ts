import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire } from 'angularfire2'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  constructor(private af: AngularFire, private router: Router) { }

  ngOnInit() {

  }

  logout() {
    this.af.auth.logout();
    console.log(this.af.auth.subscribe());
    this.router.navigate(['/']);
  }

}
