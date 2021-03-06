import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../post.model';
import { PostService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit, OnDestroy {
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
  posts: Post[] = [];
  private postsSub: Subscription;
  constructor(public postsService: PostService) {}

  ngOnInit(): void {
    this.posts = this.postsService.getPosts();
    this.postsService.getPostUpdateListener().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }
  ngOnDestroy() {
    this.postsSub.unsubscribe;
  }
}
