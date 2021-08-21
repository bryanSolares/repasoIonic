import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';

const urlImage = environment.urlImage;

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(img: string, size: string = 'w500'): string {

    if (!img) {
      return './assets/no-image-banner.jpg';
    }

    const imgRender = `${urlImage}/${size}/${img}`;

    return imgRender;
  }

}
