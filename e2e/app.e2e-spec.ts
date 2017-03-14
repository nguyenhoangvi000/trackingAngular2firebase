import { TrackingAngular2firebasePage } from './app.po';

describe('tracking-angular2firebase App', function() {
  let page: TrackingAngular2firebasePage;

  beforeEach(() => {
    page = new TrackingAngular2firebasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
