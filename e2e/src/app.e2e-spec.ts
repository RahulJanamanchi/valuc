import { browser, by, element } from 'protractor';

import { AppPage } from './app.po';

// Replace your product details in below testdate
const productData = require('./products.testdata.json');

describe('Protractor valucheck App', function() {

  function getPageElts() {
    const navElts = element.all(by.css('app-root'));
    return {
      navElts: navElts,
      scanButton: element(by.xpath('//a[@class="btn pill"]')),
      tryAsaGuestButton: element(by.xpath('//div[3]//button[1]')),
      traceButton: element(by.xpath('//button[@class="btn pill"]')),
      video: element(by.model('video'))
    };
  }

  describe('scan test : Happy Path ', () => {
    it('should have a title', async function() {
      await browser.get('http://localhost:4200');
      expect(browser.getTitle()).toEqual('ValUCheck');
    });

    it('click try as a guest', async function() {
      await browser.get('http://localhost:4200/login');
      await getPageElts().tryAsaGuestButton.click();
      expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/home');
    });

    it('click on the scan product button' , async  function() {
      await getPageElts().scanButton.click();
      expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/scan/qr-code');
    });

    it('scan the product by camera' , () => {
      browser.sleep(15000);
    });
    it('click on the grade tab' , () => {
      browser.sleep(2000);
    });

    it('Click on the trace button should to /trace' , () => {
      browser.sleep(7000);
      const traceBtn = getPageElts().traceButton;
      browser.sleep(3000);
      traceBtn.click().then(() =>
        browser.getCurrentUrl().then((url) => {
          expect(decodeURIComponent(url))
          .toEqual(decodeURIComponent('http://localhost:4200/trace/' + encodeURIComponent(JSON.stringify(productData[0]))));
        }));
    });

  });
});
