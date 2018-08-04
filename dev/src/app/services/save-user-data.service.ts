import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import * as firebase from 'firebase';

@Injectable()
export class SaveUserDataService {

  constructor() {
    if (firebase.auth().currentUser.uid) {
      const uid = firebase.auth().currentUser.uid;
      firebase.database().ref('users/' + uid).set(environment.user).then(() => {
        console.log('Save successful for user: ' + environment.userUID);
      });
    }
  }

}
