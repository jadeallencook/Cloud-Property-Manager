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
    id: undefined
  }

  constructor(private saveUserData: SaveUserDataService) { }

  edit(id, type) {
    window.scrollTo(0, 0);
    this.editor.id = id;
    if (type === 'url') {
      this.url = this.urls[id];
    } else if (type === 'feature') {
      this.feature = this.features[id];
    }
  }

  delete(id, type) {
    if (type === 'url') this.urls.splice(id, 1);
    else if (type === 'feature') this.features.splice(id, 1);
    this.saveUserData.now();
  }

  reset() {
    this.feature = {
      label: '',
      id: '',
      url: 'default'
    }
    this.url = '';
    this.editor.id = undefined;
  }

  post(type) {
    if (type === 'url' && !this.editor.id) this.urls.push(this.url);
    else if (type === 'url') this.urls[this.editor.id] = this.url;
    else if (type === 'feature' && !this.editor.id) this.features.push(this.feature);
    else if (type === 'feature') this.features[this.editor.id] = this.feature;
    else alert('Error saving, please contact the Onflo team!');
    this.saveUserData.now();
    this.reset();
  }

  ngOnInit() {
  }

}
