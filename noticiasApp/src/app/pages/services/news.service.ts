import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ResponseTopHeadlines } from '../../intefaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class NewsService {
  baseUrl = 'https://newsapi.org/v2';

  constructor(private http: HttpClient) { }

  getTopHeadlines() {
    return this.http.get<ResponseTopHeadlines>(`${this.baseUrl}/top-headlines?country=us&category=business&apiKey=${environment.apiNews}`);
  }

}
