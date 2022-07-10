import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../post.model';
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent {
  enteredContent = '';
  enteredTitle = '';
  @Output() postCreated = new EventEmitter<Post>();

  onAddPost(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const post: Post = {
      title: form.value.title,
      content: form.value.content,
    };
    console.log(`when post created `);
    // console.log(post)
    this.postCreated.emit(post);
  }
}
