/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable max-len */
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

  constructor(private http: HttpClient) { }

  getTopHeadlines() {
    return this.executeQuery<ResponseTopHeadlines>(`/top-headlines?country=us&category=business`);
  }

  getTopHeadLinesOfCategory(category: string) {
    return this.executeQuery<ResponseTopHeadlines>(`/top-headlines?country=us&category=${category}`);
  }


  private executeQuery<T>(query: string) {
    query = apiUrl + query;
    return this.http.get<T>(query, { headers });
  };
}
