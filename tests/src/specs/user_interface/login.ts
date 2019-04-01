import { by } from 'protractor';
import { Target } from 'serenity-js/lib/screenplay-protractor';

export class login {

  static email = Target.the('email input box')
      .located(by.id('email'));

  static password = Target.the('password input box')
      .located(by.id('password'));

  static firstName = Target.the('firstName input box')
      .located(by.id('firstname'));

  static lastName = Target.the('lastName input box')
      .located(by.id('lastname'));

  static sign_in = Target.the('Sign In Icon')
      .located(by.partialButtonText('Sign'));

  static register_icon = Target.the('register icon')
      .located(by.partialButtonText('Register'));

  static sign_in_icon = Target.the('sign in icon')
      .located(by.buttonText('login'));
}
