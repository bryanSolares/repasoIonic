import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListReorderedPageRoutingModule } from './list-reordered-routing.module';

import { ListReorderedPage } from './list-reordered.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListReorderedPageRoutingModule
  ],
  declarations: [ListReorderedPage]
})
export class ListReorderedPageModule {}
