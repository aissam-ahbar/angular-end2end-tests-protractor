import { SigninPage } from './app.po';

describe('signin', () => {
  const signinPage = new SigninPage();

  it('should show an error message if credentials are invalid', async () => {
    await signinPage.signIn('bla', 'bla');
  });
});
