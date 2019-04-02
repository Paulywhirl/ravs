import { Question, Text, Attribute } from 'serenity-js/lib/screenplay-protractor';
import { announcements } from '../user_interface/announcements'

export class announcementButton {

  // static isDisplayed: Question<PromiseLike<boolean>> = Attribute.of(announcements.new_announcement);

  static isShown: Question<PromiseLike<string>> = Text.of(announcements.header);

}
