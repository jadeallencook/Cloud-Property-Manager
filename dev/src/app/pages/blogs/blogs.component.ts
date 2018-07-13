import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { DomSanitizer } from '@angular/platform-browser';

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

  constructor(private _sanitizer: DomSanitizer) {}

  post() {
    if (this.editor.id != null) environment.user.blogs[this.editor.id] = this.blog;
    else this.blogs.push(this.blog);
    this.reset();
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

  reset() {
    this.blog = {
      title: '',
      description: '',
      link: '',
      image: ''
    }
    this.editor.id = null;
  }

  setBgImg(image) {
    return this._sanitizer.bypassSecurityTrustStyle(`url(${image})`);
  }

  edit(id) {
    this.blog = environment.user.blogs[id];
    this.editor.id = id;
  }

  ngOnInit() {
  }

}
