import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  authenticated:any = false;

  constructor() { 
    this.authenticated = firebase.auth().currentUser;

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.authenticated = true;
      } else {
        this.authenticated = false;
      }
    });
  }

  ngOnInit() {
  }

}
