import { PixabayPage } from './app.po';

describe('pixabay App', () => {
  let page: PixabayPage;

  beforeEach(() => {
    page = new PixabayPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
