import { Actor } from 'serenity-js/protractor';
import { protractor } from 'protractor';
import { Click, Open, PerformsTasks, BrowseTheWeb,
          ResizeBrowserWindow, UseAngular, Wait, Is, WebElement }
 from 'serenity-js/lib/screenplay-protractor';
import { See } from 'serenity-js/lib/screenplay';

import { signIn } from '../../../specs/tasks/signIn'
import { announcementButton } from '../../../specs/questions/announcementButton'
import { calendar } from '../../../specs/user_interface/calendar'
import { sideBar } from '../../../specs/user_interface/sideBar';

import chai = require('chai');
import chaiAsPromised = require('chai-as-promised');
import chai_smoothie = require('chai-smoothie');


export = function volunteerRegistrationSteps() {

  this.setDefaultTimeout(60 * 1000);

  let actor: Actor;

  chai.use(chaiAsPromised);
  // chai.use(chai_smoothie);

  const expect = chai.expect;

  this.When(/^he navigates to the global calendar$/, function () {
         // Write code here that turns the phrase above into concrete actions
         actor = Actor.named('Paul').whoCan(BrowseTheWeb.using(protractor.browser));
         actor.attemptsTo(
           UseAngular.disableSynchronisation(),
           Wait.until(sideBar.Announcements, Is.visible()),
           Click.on(sideBar.Calendar)
         )
  });

  this.Then(/^he should see the calendar display the correct sessions for that month$/, function () {
         // Write code here that turns the phrase above into concrete actions
         actor.attemptsTo(
           UseAngular.disableSynchronisation(),
           Wait.until(calendar.calendar_event, Is.visible()),
           Click.on(calendar.calendar_event)
         )
  });

}
