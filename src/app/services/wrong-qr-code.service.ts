import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WrongQRCodeService {

  private image = new BehaviorSubject(new ImageData(150, 150));

  currentImage = this.image.asObservable();

  constructor() { }

  changeImage(image: ImageData) {
    this.image.next(image);
  }

}
