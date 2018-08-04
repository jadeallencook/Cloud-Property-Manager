import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  page: string = null;

  constructor(private router: Router) {
    var config = {
      apiKey: "AIzaSyCuI7szdieP9IwD8ZwHOoFDE13-o0Jza5o",
      authDomain: "perfect-landing-1496942733795.firebaseapp.com",
      databaseURL: "https://perfect-landing-1496942733795.firebaseio.com",
      projectId: "perfect-landing--1496942733795",
      storageBucket: "perfect-landing--1496942733795.appspot.com",
      messagingSenderId: "585419763940"
    };
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.router.navigate(['/login']);
      } else {
        const ref = firebase.database().ref('/users/' + user.uid);
        environment.userUID = user.uid;
        ref.on('value', (snapshot) => {
          if (!snapshot.val()) ref.set(environment.user);
          else environment.user = snapshot.val();
        });
        this.router.navigate(['/welcome']);
      }
    });
    this.router.events.subscribe((val: any) => {
      let uid = null;
      if (firebase.auth().currentUser) uid = firebase.auth().currentUser.uid;
      if (uid && val.url && this.page !== val.url) {
        firebase.database().ref('/users/' + uid).once('value').then((snapshot) => {
          environment.user = snapshot.val();
        });
      }
    });
  }
}
