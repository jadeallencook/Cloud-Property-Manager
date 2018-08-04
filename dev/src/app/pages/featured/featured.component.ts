import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { SaveUserDataService } from '../../services/save-user-data.service';

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
  editor = {
    id: {
      url: undefined,
      feature: undefined
    }
  }

  constructor(private saveUserData: SaveUserDataService) {
  }

  edit(id, type) {
    window.scrollTo(0, 0);
    if (type === 'url') {
      this.editor.id.url = id;
      this.url = this.urls[id];
    } else if (type === 'feature') {
      this.editor.id.feature = id;
      this.feature = this.features[id];
    }
  }

  delete(id, type) {
    if (type === 'url') this.urls.splice(id, 1);
    else if (type === 'feature') this.features.splice(id, 1);
    if (this.urls && this.urls.length > 0) environment.user.urls = this.urls;
    else environment.user.urls = null;
    if (this.features) environment.user.featured = this.features;
    this.saveUserData.now();
  }

  reset() {
    this.feature = {
      label: '',
      id: '',
      url: 'default'
    }
    this.url = '';
    this.editor.id = {
        url: undefined,
        feature: undefined
      }
  }

  post(type) {
    // gen array for first push
    if (type === 'url' && !this.urls) this.urls = [];
    if (type === 'feature' && !this.features) this.features = [];
    // save logic
    if (type === 'url' && this.editor.id.url !== 0 && !this.editor.id) this.urls.push(this.url);
    else if (type === 'url') this.urls[this.editor.id.url] = this.url;
    else if (type === 'feature' && this.editor.id.feature !== 0 && !this.editor.id) this.features.push(this.feature);
    else if (type === 'feature') this.features[this.editor.id.feature] = this.feature;
    else alert('Error saving, please contact the Onflo team!');
    // update for fb
    if (this.urls) environment.user.urls = this.urls;
    if (this.features) environment.user.featured = this.features;
    // save to fb
    this.saveUserData.now();
    this.reset();
  }

  ngOnInit() {
  }

}
