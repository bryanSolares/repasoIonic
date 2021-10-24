import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../interfaces/interfaces';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  recentsMovies: Movie[] = [];
  discoversMovies: Movie[] = [];

  slidesOpts = {
    slidesPerView: 1.5,
    freeMode: true
  };

  constructor(private movieService: MoviesService) { }

  ngOnInit(): void {
    this.movieService.getFeature().subscribe(movies => this.recentsMovies = movies);
    this.movieService.getDiscoverMovies().pipe(tap(console.log)).subscribe(movies => this.discoversMovies = movies);
  }

}
