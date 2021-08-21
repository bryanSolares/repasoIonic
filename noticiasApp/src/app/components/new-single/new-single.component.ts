/* eslint-disable max-len */
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';
import { Article } from '../../intefaces/interfaces';
import { ShareServiceService } from '../../shared/services/share-service.service';
import { StorageService } from '../../shared/services/storage.service';

@Component({
  selector: 'app-news-single',
  templateUrl: './new-single.component.html',
  styleUrls: ['./new-single.component.scss'],
})
export class NewSingleComponent implements OnInit {
  @Input() newsSingle: Article;
  @Input() counterNews: number;
  @Input() stateFavorite: boolean;
  @Output() newsDeleted = new EventEmitter();

  constructor(
    private inAppBrowser: InAppBrowser,
    private actionSheetController: ActionSheetController,
    private shareService: ShareServiceService,
    private storageSevice: StorageService
  ) { }

  ngOnInit() { }

  openBrowser() {
    this.inAppBrowser.create(this.newsSingle.url, '_system', {
      fullscreen: 'yes',
    });
  }

  async launchMenu() {

    let saveDeleteBtn;

    if (this.stateFavorite) {
      saveDeleteBtn = {
        text: 'Delete Favorite',
        icon: 'trash',
        cssClass: 'action-dark',
        handler: () => {
          this.deleteNews();
        },
      };
    } else {
      saveDeleteBtn = {
        text: 'Favorite',
        icon: 'star',
        cssClass: 'action-dark',
        handler: () => {
          this.storageSevice.saveNewsSingle(this.newsSingle);
        },
      };
    }

    const action = await this.actionSheetController.create({
      buttons: [
        {
          text: 'Share',
          icon: 'share',
          cssClass: 'action-dark',
          handler: () => {
            this.shareService.shareAllPlatforms(
              this.newsSingle.title,
              this.newsSingle.source.name,
              '',
              this.newsSingle.url
            );
          },
        },
        saveDeleteBtn,
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          cssClass: 'action-dark',
          handler: () => { },
        },
      ],
      translucent: true,
    });

    await action.present();
  }

  private deleteNews() {
    this.storageSevice.deleteNewsSingle(this.newsSingle);
    this.newsDeleted.emit(this.newsSingle);
  }
}
