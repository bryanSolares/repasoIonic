/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
import { Component, OnInit, OnDestroy } from '@angular/core';
import { StorageService } from '../../shared/services/storage.service';
import { Article } from '../../intefaces/interfaces';
import { takeUntil, tap } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit, OnDestroy {

  news: Article[] = [];
  sliderOpts = {
    allowSlidePrev: false,
    allowSlideNext: false
  };
  private _destroy$ = new Subject();

  constructor(private storageService: StorageService) {
  }

  ngOnInit(): void {
    this.storageService.loadNews().pipe(tap(console.log), takeUntil(this._destroy$)).subscribe(news => { this.news = news; console.log('receive data'); });
  }


  ngOnDestroy() {
    this._destroy$.next({});
    this._destroy$.complete();
  }

}
