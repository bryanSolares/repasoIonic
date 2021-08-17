import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SkeletonPage } from './skeleton.page';

const routes: Routes = [
  {
    path: '',
    component: SkeletonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkeletonPageRoutingModule {}
