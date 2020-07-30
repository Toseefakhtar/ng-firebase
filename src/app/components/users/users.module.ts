import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';

const UsersRoutes: Route[] = [
  {
    path: '',
    component: UsersComponent

  }
];

@NgModule({
  declarations: [UsersComponent],
  exports: [UsersComponent],
  imports: [
    RouterModule.forChild(UsersRoutes),
    CommonModule
  ]
})
export class UsersModule { }
