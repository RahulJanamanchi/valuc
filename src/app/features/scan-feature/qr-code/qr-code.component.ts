import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jsQR from 'jsqr';
import {WrongQRCodeService} from '../../../services/wrong-qr-code.service';
import {ProductDetailsService} from '../../../services/product-details.service';
import * as localforage from 'localforage';
@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.scss']
})
export class QrCodeComponent implements OnInit {

  constructor(public router: Router, private wrongQR: WrongQRCodeService, private product: ProductDetailsService) { }

  ngOnInit() {
  }

  handleScan(imageData: ImageData) {
    const code = jsQR(imageData.data, imageData.width, imageData.height);
    if (code && code.data) {
      const obj = code.data.includes('batchNumber') ? JSON.parse(code.data) : null;
      if (obj) {
        this.wrongQR.changeImage(imageData);
        this.product.setData(code.data);
        localforage.setItem('scannedProductDetails', code.data);
        this.router.navigateByUrl('/product');
      } else {
        this.wrongQR.changeImage(imageData);
        this.router.navigateByUrl('product/error');
      }
    }
  }

}
