import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListReorderedPage } from './list-reordered.page';

const routes: Routes = [
  {
    path: '',
    component: ListReorderedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListReorderedPageRoutingModule {}
