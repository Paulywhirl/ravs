import { Actor } from 'serenity-js/protractor';
import { protractor } from 'protractor';
import { Click, Open, PerformsTasks, BrowseTheWeb,
          ResizeBrowserWindow, UseAngular, Wait, Is, WebElement }
 from 'serenity-js/lib/screenplay-protractor';
import { See } from 'serenity-js/lib/screenplay';

import { signIn } from '../../../specs/tasks/signIn'
import { announcementButton } from '../../../specs/questions/announcementButton'
import { announcements } from '../../../specs/user_interface/announcements'
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

  this.Given(/^(.*) wants to login$/, function (actorName: string) {
      actor = Actor.named(actorName).whoCan(BrowseTheWeb.using(protractor.browser));
      return actor.attemptsTo(
        UseAngular.disableSynchronisation(),
        Open.browserOn('http://127.0.0.1:3000')
      )
  });

  this.When(/^s?he logins with his credentials$/, function (table) {
         // Write code here that turns the phrase above into concrete actions
         return actor.attemptsTo(
           signIn.toProfile('phender9@uwo.ca', 'chrw123'),
         )
  });

  this.Then(/^the necessary buttons available to him$/, function () {
         actor.attemptsTo(
           UseAngular.disableSynchronisation(),
           Wait.until(sideBar.Announcements, Is.visible()),
           Click.on(sideBar.Announcements),
           Wait.until(announcements.new_announcement, Is.visible())
         )
         // expect(announcements.new_announcement).to.eventually.be.displayed
         return actor.attemptsTo(
           See.if(WebElement.of(announcements.new_announcement), actual => expect(actual.isPresent()).to.eventually.be.true),
         );
         // expect()
         // return actor.attemptsTo(
         //   See.if(announcementButton.isShown, actual => expect(actual).to.eventually.eql('Announcements')),
         // )
  });

}
