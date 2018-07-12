import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  banner = {
    topText: '',
    bigText: '',
    description: '',
    image: '',
  }

  editor = {
    id: null
  }

  banners = environment.user.banners;

  constructor() { }

  post() {
    if (this.editor.id != null) {
      environment.user.banners[this.editor.id] = this.banner;
    } else {
    this.banners.push(this.banner);
    }
  }

  delete(id) {
    environment.user.banners.splice(id, 1);
  }

  clear() {
    this.editor.id = null;
    this.banner = {
      topText: '',
      bigText: '',
      description: '',
      image: ''
    }
  }

  edit(id) {
    this.banner = environment.user.banners[id];
    this.editor.id = id;
  }

  ngOnInit() {
  }

}
