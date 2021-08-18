/* eslint-disable max-len */
import { Component, ViewChild, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { IonSegment, IonInfiniteScroll } from '@ionic/angular';
import { NewsService } from '../services/news.service';
import { Article } from '../../intefaces/interfaces';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(IonSegment) segment: IonSegment;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
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

  changeCategory(category: string) {
    this.newsTopHeadlines = [];
    this.loadNews(category);
  }

  loadData(event) {
    this.loadNews(this.segment.value, event);
  }


  ngOnDestroy(): void {
    this.destroy$.next({});
    this.destroy$.complete();
  }

  private loadNews(category: string = this.categories[0], event?) {
    this.newsService
      .getTopHeadLinesOfCategory(category)
      .pipe(takeUntil(this.destroy$))
      .subscribe((news) => {

        if (!news.articles.length && event) {
          this.infiniteScroll.disabled = true;
          this.infiniteScroll.complete();
          return;
        }

        this.newsTopHeadlines.push(...news.articles);

        if (event) {
          this.infiniteScroll.complete();
        }
      });
  }
}
