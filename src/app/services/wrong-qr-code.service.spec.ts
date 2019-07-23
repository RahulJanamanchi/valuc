import { TestBed } from '@angular/core/testing';

import { WrongQRCodeService } from './wrong-qr-code.service';

describe('WrongQrCodeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WrongQRCodeService = TestBed.get(WrongQRCodeService);
    expect(service).toBeTruthy();
  });
});
