import { protractor } from 'protractor';
import { Click, Enter, PerformsTasks, step, Task, UseAngular, Wait, Is }
 from 'serenity-js/lib/screenplay-protractor';
 import { sideBar } from '../user_interface/sideBar';

export class navigateToAnnouncement implements Task {

  public static toCheckButton(): navigateToAnnouncement {
          return new navigateToAnnouncement(email, password);
        }

  @step('{0} signs in using their email: "#email"')
  performAs(actor: PerformsTasks): PromiseLike<void> {
    return actor.attemptsTo(
      UseAngular.disableSynchronisation(),
      Click.on(sideBar.Announcements)
    )
  }

  constructor() {}
}
