/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ResponseTopHeadlines } from '../../intefaces/interfaces';

const apiKey = environment.apiNews;
const apiUrl = 'https://newsapi.org/v2';
const headers = new HttpHeaders({
  'X-Api-Key': apiKey
});

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private _headLinesPages = 0;
  private _headLinesPagesCategory = 0;
  private _currentCategory = '';

  constructor(private http: HttpClient) { }

  getTopHeadlines() {
    this._headLinesPages++;
    return this.executeQuery<ResponseTopHeadlines>(`/top-headlines?country=us&page=${this._headLinesPages}`);
  }

  getTopHeadLinesOfCategory(category: string) {

    if (this._currentCategory === category) {
      this._headLinesPagesCategory++;
    } else {
      this._currentCategory = category;
      this._headLinesPagesCategory = 1;
    }

    return this.executeQuery<ResponseTopHeadlines>(`/top-headlines?country=us&page=${this._headLinesPagesCategory}&category=${category}`);
  }


  private executeQuery<T>(query: string) {
    query = apiUrl + query;
    return this.http.get<T>(query, { headers });
  };
}
