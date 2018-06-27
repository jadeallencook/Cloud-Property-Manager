import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  blogs = {
    title: '',
    description: '',
    link: '',
    image: ''
  }

  constructor() { }

  post() {
    console.log(this.blogs)
  }

  ngOnInit() {
  }

}
