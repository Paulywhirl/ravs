import { by } from 'protractor';
import { Target } from 'serenity-js/lib/screenplay-protractor';

export class sideBar{

  static Calendar = Target.the('Calendar option')
    .located(by.xpath('//*[@id="app-background"]/div[1]/div/div[1]/nav/div/div[2]/div/div[1]'));

  static Announcements = Target.the('Announcement option')
    .located(by.xpath('//*[@id="app-background"]/div[1]/div/div[1]/nav/div/div[3]/div/div[1]'));
}
