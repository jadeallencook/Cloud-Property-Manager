import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { DomSanitizer } from '@angular/platform-browser';
import { forEach } from '../../../../node_modules/@angular/router/src/utils/collection';

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
    id: null,
    error: ''
  }

  banners = environment.user.banners;

  constructor(private _sanitizer: DomSanitizer) { }

  post() {
    var test = true;
    Object.keys(this.banner).forEach(key => {
      if (this.banner[key].length === 0) test = false;
    });
    if (test){
      if (this.editor.id != null) environment.user.banners[this.editor.id] = this.banner;
      else this.banners.push(this.banner);
      this.reset();
    } else {
      this.editor.error = 'Looks like you\'re missing something...';
      var report = setTimeout(() => {
        this.editor.error = '';
        clearTimeout(report);
      }, 2000);
    }
  }

  delete(id) {
    environment.user.banners.splice(id, 1);
  }

  reset() {
    this.banner = {
      topText: '',
      bigText: '',
      description: '',
      image: '',
    }
    this.editor.id = null;
  }

  setBgImg(image) {
    return this._sanitizer.bypassSecurityTrustStyle(`url(${image})`);
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
