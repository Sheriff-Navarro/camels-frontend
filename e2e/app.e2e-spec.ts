import { UsersAngularPage } from './app.po';

describe('users-angular App', () => {
  let page: UsersAngularPage;

  beforeEach(() => {
    page = new UsersAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
