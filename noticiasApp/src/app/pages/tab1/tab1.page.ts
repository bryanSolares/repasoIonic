import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NewsService } from '../services/news.service';
import { Article } from '../../intefaces/interfaces';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit, OnDestroy {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  news: Article[] = [];
  private destroy$ = new Subject<any>();

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.loadNews();
  }

  loadData(event) {
    this.loadNews(event);
  }

  ngOnDestroy(): void {
    this.destroy$.next({});
    this.destroy$.complete();
  }

  private loadNews(event?) {
    this.newsService.getTopHeadlines().pipe(takeUntil(this.destroy$)).subscribe(news => {

      if (!news.articles.length && event) {
        this.infiniteScroll.disabled = true;
        this.infiniteScroll.complete();
        return;
      }
      this.news.push(...news.articles);
      if (event) {
        this.infiniteScroll.complete();
      }
    });
  }
}
