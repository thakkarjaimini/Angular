import { MyAngularGitPage } from './app.po';

describe('my-angular-git App', () => {
  let page: MyAngularGitPage;

  beforeEach(() => {
    page = new MyAngularGitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
