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
    image: ''
  }

  banners = environment.user.banners;

  constructor() {
    console.log(environment);
  }

  post() {
    console.log(this.banner)
  }

  ngOnInit() {
  }

}
