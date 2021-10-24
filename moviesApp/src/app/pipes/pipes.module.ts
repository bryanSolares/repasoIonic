import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePipe } from './image.pipe';
import { ParsPipe } from './pars.pipe';



@NgModule({
  declarations: [
    ImagePipe,
    ParsPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [ImagePipe]
})
export class PipesModule { }
