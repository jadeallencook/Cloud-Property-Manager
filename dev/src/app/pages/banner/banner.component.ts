import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { DomSanitizer } from '@angular/platform-browser';
import { SaveUserDataService } from '../../services/save-user-data.service';

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

  constructor(private _sanitizer: DomSanitizer, private saveUserData: SaveUserDataService) { }

  post() {
    var test = true;
    Object.keys(this.banner).forEach(key => {
      if (this.banner[key].length === 0) test = false;
    });
    if (test){
      if (this.editor.id != null) environment.user.banners[this.editor.id] = this.banner;
      else this.banners.push(this.banner);
      this.saveUserData.now();
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
    this.banners = environment.user.banners;
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
    window.scrollTo(0, 0);
    this.banner = environment.user.banners[id];
    this.editor.id = id;
  }

  ngOnInit() {
  }

}
