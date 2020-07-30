import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { PostsComponent } from './posts.component';

const PostsRoutes: Route[] = [
  {
    path: '',
    component: PostsComponent

  }
];

@NgModule({
  declarations: [PostsComponent],
  exports: [PostsComponent],
  imports: [
    RouterModule.forChild(PostsRoutes),
    CommonModule
  ]
})
export class PostsModule { }
