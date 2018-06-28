import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private router: Router) {
    var config = {
      apiKey: "AIzaSyCuI7szdieP9IwD8ZwHOoFDE13-o0Jza5o",
      authDomain: "perfect-landing-1496942733795.firebaseapp.com",
      databaseURL: "https://perfect-landing-1496942733795.firebaseio.com",
      projectId: "perfect-landing--1496942733795",
      storageBucket: "",
      messagingSenderId: "585419763940"
    };
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) this.router.navigate(['/login']);
    });
  }
}
