import { Question, Text } from 'serenity-js/lib/screenplay-protractor';
import { dashboard } from '../user_interface/dashboard'

export class dashboardComponents {

  static isDisplayed: Question<PromiseLike<string>> = Text.of(dashboard.header);
}
