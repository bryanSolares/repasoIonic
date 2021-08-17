import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DataService } from '../../services/data.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit, OnDestroy {

  albums: any[] = [];
  searchText: string;
  private destroy$ = new Subject<any>();

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAlbums().pipe(takeUntil(this.destroy$)).subscribe((data: any[]) => this.albums = data);
  }

  onSearchChange(event) {
    this.searchText = event.detail.value;
  }

  ngOnDestroy() {
    this.destroy$.next({});
    this.destroy$.complete();
  }

}
