import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss']
})
export class FeaturedComponent implements OnInit {

  featured = {
    label: '',
    id: '',
    url: 'Default'
  }

  custom = {
    url: ''
  }

  constructor() { }

  featuredSave() {
    console.log(this.featured)
  }

  customSave() {
    console.log(this.custom)
  }

  ngOnInit() {
  }

}
