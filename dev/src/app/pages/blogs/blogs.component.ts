import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { DomSanitizer } from '@angular/platform-browser';
import { SaveUserDataService } from '../../services/save-user-data.service';

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
    id: null,
    error: ''
  }

  constructor(private _sanitizer: DomSanitizer, private saveUserData: SaveUserDataService) { }

  post() {
    var test = true;
    Object.keys(this.blog).forEach(key => {
      if (this.blog[key].length === 0) test = false;
    });
    if (test) {
      if (this.editor.id != null) environment.user.blogs[this.editor.id] = this.blog;
      else this.blogs.push(this.blog);
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
    window.scrollTo(0, 0);
    this.blog = environment.user.blogs[id];
    this.editor.id = id;
  }

  ngOnInit() {
  }

}
