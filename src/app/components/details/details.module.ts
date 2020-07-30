import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { DetailsComponent } from './details.component';

const DetailsRoutes: Route[] = [
  {
      path: '',
      component: DetailsComponent

  }
];


@NgModule({
  declarations: [DetailsComponent],
  exports: [DetailsComponent],
  imports: [
    RouterModule.forChild(DetailsRoutes),
    CommonModule
  ]
})
export class DetailsModule { }
