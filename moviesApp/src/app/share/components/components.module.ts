import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { PipesModule } from '../../pipes/pipes.module';
import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';
import { SlideshowParsComponent } from './slideshow-pars/slideshow-pars.component';



@NgModule({
  declarations: [SlideshowBackdropComponent, SlideshowPosterComponent, SlideshowParsComponent],
  imports: [
    CommonModule,
    PipesModule
  ],
  exports: [SlideshowBackdropComponent, SlideshowPosterComponent, SlideshowParsComponent]
})
export class ComponentsModule { }
