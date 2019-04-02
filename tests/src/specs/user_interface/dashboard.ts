import { by } from 'protractor';
import { Target } from 'serenity-js/lib/screenplay-protractor';

export class dashboard {

  static header = Target.the("dashboard header")
    .located(by.css('.dashboard h1'))

}
