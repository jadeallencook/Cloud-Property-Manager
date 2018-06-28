import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login = {
    email: '',
    password: '',
    error: ''
  }

  constructor(private router: Router) {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) this.router.navigate(['/home']);
    });
  }

  signIn() {
    console.log(this.login)
    firebase.auth().signInWithEmailAndPassword(this.login.email, this.login.password).then(() => {
      this.router.navigate(['/settings']);
    }).catch((error) => {
      this.login.error = error.message;
    });
  }

  ngOnInit() {
  }

}
