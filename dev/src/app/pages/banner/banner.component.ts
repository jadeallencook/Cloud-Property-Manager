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

  constructor() { }

  post() {
    console.log(this.banner)
  }

  ngOnInit() {
  }

}
