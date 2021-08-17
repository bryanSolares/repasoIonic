import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NewsService } from '../services/news.service';
import { Article } from '../../intefaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit, OnDestroy {

  news: Article[] = [];
  private destroy$ = new Subject<any>();

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getTopHeadlines().pipe(takeUntil(this.destroy$)).subscribe(news => this.news.push(...news.articles));
  }

  ngOnDestroy(): void {
    this.destroy$.next({});
    this.destroy$.complete();
  }

}
