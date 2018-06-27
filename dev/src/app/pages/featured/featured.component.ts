import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss']
})
export class FeaturedComponent implements OnInit {

  featured = {
    label: '',
    id: '',
    url: ''
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
