import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';
  error: string = '';

  constructor(private router: Router) {
    if (firebase.auth().currentUser) {
      this.router.navigate(['/settings']);
    }
  }

  signIn() {
    firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(() => {
      this.router.navigate(['/settings']);
    }).catch((error) => {
      this.error = error.message;
    });
  }

  signUp() {
    firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(() => {
      this.signIn();
    }).catch((error) => {
      this.error = error.message;
    });
  }

  ngOnInit() {
  }

}
