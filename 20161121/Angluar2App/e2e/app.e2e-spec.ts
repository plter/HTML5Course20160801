import { Angluar2AppPage } from './app.po';

describe('angluar2-app App', function() {
  let page: Angluar2AppPage;

  beforeEach(() => {
    page = new Angluar2AppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
