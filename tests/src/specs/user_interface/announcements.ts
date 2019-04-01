import { by } from 'protractor';
import { Target } from 'serenity-js/lib/screenplay-protractor';

export class announcements {

  static new_announcement = Target.the('create new announcement button')
    .located(by.xpath('//*[@id=\"main\"]/div/div/div[1]/a/button'))

  static header = Target.the("announcement header")
    .located(by.xpath('//*[@id="main"]/div/div/h1'))
}
