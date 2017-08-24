import { Clase1Page } from './app.po';

describe('clase1 App', function() {
  let page: Clase1Page;

  beforeEach(() => {
    page = new Clase1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
