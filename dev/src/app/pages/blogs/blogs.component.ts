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

  editor = {
    id: null
  }

  constructor() { }

  post() {
    if (this.editor.id != null) {
      environment.user.blogs[this.editor.id] = this.blog;
    } else {
    this.blogs.push(this.blog);
    }
  }

  delete(id) {
    environment.user.blogs.splice(id, 1);
  }

  clear() {
    this.editor.id = null;
    this.blog = {
      title: '',
      description: '',
      link: '',
      image: ''
    }
  }

  edit(id) {
    this.blog = environment.user.blogs[id];
    this.editor.id = id;
  }

  ngOnInit() {
  }

}
