import { by } from 'protractor';
import { Target } from 'serenity-js/lib/screenplay-protractor';

export class calendar {

  static calendar_event = Target.the('calendar training session')
    .located(by.xpath('//*[@id="main"]/div/div[1]/div[2]/div[4]/div[2]/div[2]/div[2]'))

  static event_title = Target.the('sessions title')
    .located(by.xpath('//*[@id="main"]/div/h3[2]'))
}
