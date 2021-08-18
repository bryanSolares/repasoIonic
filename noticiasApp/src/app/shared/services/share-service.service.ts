import { Injectable } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Injectable({
  providedIn: 'root'
})
export class ShareServiceService {

  constructor(private socialSharing: SocialSharing) { }

  shareAllPlatforms(message, subject, file, url) {
    this.socialSharing.share(message, subject, file, url);
  }
}
