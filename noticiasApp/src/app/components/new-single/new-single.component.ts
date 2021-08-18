/* eslint-disable max-len */
import { Component, Input, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';

import { Article } from '../../intefaces/interfaces';
import { ShareServiceService } from '../../shared/services/share-service.service';

@Component({
  selector: 'app-news-single',
  templateUrl: './new-single.component.html',
  styleUrls: ['./new-single.component.scss'],
})
export class NewSingleComponent implements OnInit {

  @Input() newsSingle: Article;
  @Input() counterNews: number;

  constructor(private inAppBrowser: InAppBrowser, private actionSheetController: ActionSheetController, private shareService: ShareServiceService) { }

  ngOnInit() { }

  openBrowser() {
    this.inAppBrowser.create(this.newsSingle.url, '_system', { fullscreen: 'yes' });
  }

  async launchMenu() {
    const action = await this.actionSheetController.create({
      buttons: [
        {
          text: 'Share',
          icon: 'share',
          cssClass: 'action-dark',
          handler: () => { }
        }, {
          text: 'Favorite',
          icon: 'star',
          cssClass: 'action-dark',
          handler: () => {
            this.shareService.shareAllPlatforms(this.newsSingle.title, this.newsSingle.source.name, '', this.newsSingle.url);
          }
        }, {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          cssClass: 'action-dark',
          handler: () => { }
        }
      ],
      translucent: true
    });

    await action.present();
  }

}
