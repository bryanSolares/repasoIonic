import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DataService } from '../../services/data.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit, OnDestroy {

  heroes: any[] = [];
  publisher: string;
  private destroy$ = new Subject<any>();

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getHeroes().pipe(takeUntil(this.destroy$)).subscribe(heroes => this.heroes = heroes);
  }

  segmentChanged(event) {
    this.publisher = event.detail.value;
  }

  ngOnDestroy() {
    this.destroy$.next({});
    this.destroy$.complete();
  }

}
