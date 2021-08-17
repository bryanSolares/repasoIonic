import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgressRangePage } from './progress-range.page';

const routes: Routes = [
  {
    path: '',
    component: ProgressRangePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgressRangePageRoutingModule {}
