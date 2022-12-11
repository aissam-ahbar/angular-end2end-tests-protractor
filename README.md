# Angular End-to-end tests with Protractor (deprecated by Google)

Write an end-to-end test using page object and Jasmine spec file.

```ts
# Page object (CSS selection, navigation)
export class SigninPage {
  navigateTo() {
    return browser.get('/signin');
  }

  async signIn(username: string, password: string) {
    await element(by.css('[data-username="username"]')).sendKeys(username);
    await element(by.css('[data-password="password"]')).sendKeys(password);
  }
}
```

```ts
# Test
describe('signin', () => {
  const signinPage = new SigninPage();

  it('should show an error message if credentials are invalid', async () => {
    await signinPage.signIn('bla', 'bla');
  });
});
```
