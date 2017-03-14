import { browser, element, by } from 'protractor';

export class TrackingAngular2firebasePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
