import { browser, by, element } from 'protractor';

export class SigninPage {
  navigateTo() {
    return browser.get('/signin');
  }

  async signIn(username: string, password: string) {
    await element(by.css('[data-username="username"]')).sendKeys(username);
    await element(by.css('[data-password="password"]')).sendKeys(password);
  }
}
