import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  blog = {
    title: '',
    description: '',
    link: '',
    image: ''
  }

  blogs = environment.user.blogs;
  

  constructor() { }

  post() {
    console.log(this.blog)
  }

  ngOnInit() {
  }

}
