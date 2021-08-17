import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchbarPageRoutingModule } from './searchbar-routing.module';

import { SearchbarPage } from './searchbar.page';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
    IonicModule,
    SearchbarPageRoutingModule
  ],
  declarations: [SearchbarPage]
})
export class SearchbarPageModule { }
