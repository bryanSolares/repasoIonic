import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FabButtonPageRoutingModule } from './fab-button-routing.module';

import { FabButtonPage } from './fab-button.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FabButtonPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FabButtonPage]
})
export class FabButtonPageModule { }
