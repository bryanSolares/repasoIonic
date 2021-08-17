import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NewsComponent } from './news/news.component';
import { NewSingleComponent } from './new-single/new-single.component';



@NgModule({
  declarations: [NewsComponent, NewSingleComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [NewsComponent, NewSingleComponent]
})
export class ComponentsModule { }
