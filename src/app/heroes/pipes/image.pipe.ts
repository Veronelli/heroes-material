import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/heroes.interface';

@Pipe({
  name: 'image',
  pure: true
})
export class ImagePipe implements PipeTransform {

  transform(value: Hero): string {
    if (!value.id && !value.alt_img) return `assets/no-image.png`;
    else if (value.alt_img) return value.alt_img;
    else return `assets/heroes/${value.id}.jpg`;
  }

}
