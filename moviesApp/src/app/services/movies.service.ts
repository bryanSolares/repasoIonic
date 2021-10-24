/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { ResponseMDB } from '../interfaces/interfaces';

const apiURL = environment.urlApi;
const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) { }

  getFeature() {

    const today = new Date();
    const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    const month = today.getMonth() + 5;
    const monthString = month < 10 ? '0'.concat(month.toString()) : month;
    const start = `${today.getFullYear()}-${monthString}-01`;
    const end = `${today.getFullYear()}-${monthString}-${lastDay}`;

    const url = '/discover/movie';
    const query = `primary_release_date.gte=${start}&primary_release_date.lte=${end}`;

    return this.executePeticion<ResponseMDB>(url, query).pipe(map(responseMovies => responseMovies.results));
  }

  getDiscoverMovies() {
    const url = '/discover/movie';
    const query = ' sort_by=popularity.desc';
    return this.executePeticion<ResponseMDB>(url, query).pipe(map(responseMovies => responseMovies.results));
  }

  getGeneresList() {
    const query = '';
    return this.executePeticion('/genre/movie', query);
  }

  private executePeticion<T>(url, query) {
    url = apiURL + url;
    url += `?api_key=${apiKey}&language=es&include_image_language=en-US&include_video=true&${query}`;
    return this.http.get<T>(url);
  }
}
