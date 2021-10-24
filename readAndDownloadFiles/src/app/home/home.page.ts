/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component } from '@angular/core';

import { HttpClient, HttpEventType } from '@angular/common/http';

import { Filesystem, Directory } from '@capacitor/filesystem';
import { Storage } from '@capacitor/storage';
import { FileOpener } from '@ionic-native/file-opener/ngx';

import { tap } from 'rxjs/operators';

export const FILE_KEY = 'files';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  downloadUrl = '';
  myFiles = [];
  downloadProgress = 0;

  pdfUrl =
    'https://file-examples-com.github.io/uploads/2017/10/file-example_PDF_1MB.pdf';
  videoUrl =
    'https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_1MG.mp3';
  imageUrl =
    'https://file-examples-com.github.io/uploads/2017/10/file_example_PNG_1MB.png';

  constructor(private http: HttpClient, private fileOpener: FileOpener) {
    this.loadFiles();
  }

  async loadFiles() {
    const videoList = await Storage.get({ key: FILE_KEY });
    this.myFiles = JSON.parse(videoList.value) || [];
  }

  private convetBlobToBase64 = (blob: Blob) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(blob);
    });

  private getMimetype(name) {
    if (name.indexOf('pdf') >= 0) {
      return 'application/pdf';
    } else if (name.indexOf('png') >= 0) {
      return 'image/png';
    } else if (name.indexOf('mp4') >= 0) {
      return 'video/mp4';
    }
  }

  downloadFile(url: string) {
    this.downloadUrl = url ? url : this.downloadUrl;

    this.http
      .get(this.downloadUrl, {
        responseType: 'blob',
        reportProgress: true,
        observe: 'events',
      })
      .pipe(tap((data) => console.log(data)))
      .subscribe(async (event) => {
        if (event.type === HttpEventType.DownloadProgress) {
          this.downloadProgress = Math.round(
            (100 * event.loaded) / event.total
          );
        } else if (event.type == HttpEventType.Response) {
          this.downloadProgress = 0;

          const name = this.downloadUrl.substring(
            this.downloadUrl.lastIndexOf('/') + 1
          );
          const base64 = (await this.convetBlobToBase64(event.body)) as string;

          const savedFile = await Filesystem.writeFile({
            path: name,
            data: base64,
            directory: Directory.Documents,
          });

          // const uriPath = await Filesystem.getUri({
          //   directory: Directory.Documents,
          //   path: name,
          // });
          const path = savedFile.uri;
          const mimeType = this.getMimetype(name);

          this.fileOpener
            .open(path, mimeType)
            .then(() => console.log('File is opened'))
            .catch((error) => console.error('Error openeing file', error));

          this.myFiles.unshift(path);

          Storage.set({ key: FILE_KEY, value: JSON.stringify(this.myFiles) });
        }
      });
  }
}
