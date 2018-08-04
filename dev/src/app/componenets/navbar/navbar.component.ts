import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  authenticated:any = false;

  constructor(private router: Router) { 
    this.authenticated = firebase.auth().currentUser;
    firebase.auth().onAuthStateChanged((user) => {
      if (user) this.authenticated = true;
      else this.authenticated = false;
    });
  }

  logout() {
    firebase.auth().signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }

  ngOnInit() {
  }

}
