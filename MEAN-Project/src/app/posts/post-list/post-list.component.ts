import { Component, Input } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent {
  // posts = [
  //   {
  //     title: 'First Post',
  //     content: 'This is the first post',
  //   },
  //   {
  //     title: 'Second Post',
  //     content: 'This is the Second post',
  //   },
  //   {
  //     title: 'First Third',
  //     content: 'This is the Third post',
  //   },
  // ];
  @Input() posts: Post[] = [];
  constructor(public postsService: PostService) {}
}
