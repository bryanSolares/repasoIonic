import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../../interfaces/interfaces';

@Component({
  selector: 'app-slideshow-pars',
  templateUrl: './slideshow-pars.component.html',
  styleUrls: ['./slideshow-pars.component.scss'],
})
export class SlideshowParsComponent implements OnInit {

  @Input() movies: Movie[] = [];
  slidesOpts = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -10
  };

  constructor() { }

  ngOnInit() { }

}
