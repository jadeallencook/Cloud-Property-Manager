import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss']
})
export class FeaturedComponent implements OnInit {

  feature = {
    label: '',
    id: '',
    url: 'default'
  }
  url = '';
  features = environment.user.featured;
  urls = environment.user.urls;

  constructor() { }

  edit(id, type) {
    if (type === 'url') {
      this.url = this.urls[id];
      this.delete(id, type);
    } else if (type === 'feature') {
      this.feature = this.features[id];
      this.delete(id, type);
    }
  }

  delete(id, type) {
    if (type === 'url') this.urls.splice(id, 1);
    else if (type === 'feature') this.features.splice(id, 1);
  }

  post(type) {
    if (type === 'url') {
      this.urls.push(this.url);
      this.url = '';
    } else if (type === 'feature') {
      this.features.push(this.feature);
      this.feature = {
        label: '',
        id: '',
        url: 'default'
      }
    }
  }

  ngOnInit() {
  }

}
