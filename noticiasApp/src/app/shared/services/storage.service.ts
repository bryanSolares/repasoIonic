/* eslint-disable arrow-body-style */
/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver';
import { BehaviorSubject, from, of, Subject } from 'rxjs';
import { filter, switchMap, tap } from 'rxjs/operators';

import { Article } from '../../intefaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private _news$ = new BehaviorSubject<Article[]>([]);
  private _news: Article[] = [];
  private _storageReady$ = new BehaviorSubject<boolean>(false);

  constructor(private storage: Storage, private toastController: ToastController) {
    this.init();
  }

  async init() {
    console.log('start init');
    await this.storage.defineDriver(CordovaSQLiteDriver);
    await this.storage.create();
    this._storageReady$.next(true);
    console.log('end init');
  }

  loadNews() {
    console.log('start loadnews');
    return this._storageReady$.pipe(
      filter(ready => ready),
      switchMap(async _ => {
        console.log('start transmition loadnews');
        this._news = await this.storage.get('favorites');
        this._news$.next(this._news);
        console.log('end transmition loadnews');
        return this._news$.value;
      })
    );
  }

  async saveNewsSingle(news: Article) {
    if (!this._news.some(n => n.title === news.title)) {
      this._news.unshift(news);
      await this.storage.set('favorites', this._news);
      this._news$.next(this._news);
      this.presentToast('Added to Favorites');
    }
  }

  async deleteNewsSingle(news: Article) {
    this._news = this._news.filter(n => n.title !== news.title);
    await this.storage.set('favorites', this._news);
    this._news$.next(this._news);
    this.presentToast('Removed to Favorites');
  }

  private async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 1500
    });
    toast.present();
  }


  // loadFavorites() {
  //   return this._storageReady$.pipe(filter(ready => ready), switchMap(async _ => {
  //     this._news = await this.storage.get('favorites') || [];
  //     this._newsSubject$.next(this._news);
  //     return this._newsSubject$.asObservable();
  //   }));
  // }

}
