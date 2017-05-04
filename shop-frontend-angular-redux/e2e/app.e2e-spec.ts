import { ShopFrontendAngularReduxPage } from './app.po';

describe('shop-frontend-angular-redux App', () => {
  let page: ShopFrontendAngularReduxPage;

  beforeEach(() => {
    page = new ShopFrontendAngularReduxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
