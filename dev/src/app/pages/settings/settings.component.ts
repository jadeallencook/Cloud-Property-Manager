import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  save() {
    console.log(this.links);
  }

  ngOnInit() {
  }

}
