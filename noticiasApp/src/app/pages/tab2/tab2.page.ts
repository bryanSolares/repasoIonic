/* eslint-disable max-len */
import { Component, ViewChild, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { NewsService } from '../services/news.service';
import { Article } from '../../intefaces/interfaces';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(IonSegment) segment: IonSegment;
  categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
  newsTopHeadlines: Article[] = [];
  private destroy$ = new Subject<any>();

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.loadNews();
  }

  ngAfterViewInit(): void {
    this.segment.value = this.categories[0];
  }

  loadNews(category: string = this.categories[0]) {
    this.newsTopHeadlines = [];
    this.newsService
      .getTopHeadLinesOfCategory(category)
      .pipe(takeUntil(this.destroy$))
      .subscribe((news) => {
        this.newsTopHeadlines = news.articles;
        console.log(news);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next({});
    this.destroy$.complete();
  }
}
