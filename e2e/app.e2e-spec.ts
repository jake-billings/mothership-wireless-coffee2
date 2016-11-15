import { WirelessCoffee2Page } from './app.po';

describe('wireless-coffee2 App', function() {
  let page: WirelessCoffee2Page;

  beforeEach(() => {
    page = new WirelessCoffee2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
