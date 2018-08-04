import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { SaveUserDataService } from '../../services/save-user-data.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  links = {
    facebook: '',
    twitter: '',
    pinterest: '',
    instagram: ''
  }

  constructor(private saveUserData: SaveUserDataService) {
    this.links = environment.user.links;
  }

  save() {
    environment.user.links = this.links;
    this.saveUserData.now();
  }

  ngOnInit() {
  }

}
