import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { PipesModule } from '../../pipes/pipes.module';
import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';



@NgModule({
  declarations: [SlideshowBackdropComponent, SlideshowPosterComponent],
  imports: [
    CommonModule,
    PipesModule
  ],
  exports: [SlideshowBackdropComponent, SlideshowPosterComponent]
})
export class ComponentsModule { }
