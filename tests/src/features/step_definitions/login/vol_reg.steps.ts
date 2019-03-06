import { Actor } from 'serenity-js/protractor';
import { protractor } from 'protractor';
import { Open, PerformsTasks, BrowseTheWeb, ResizeBrowserWindow } from 'serenity-js/lib/screenplay-protractor';

// const Register = require('@specs/tasks/registers');
import { register } from '../../../specs/tasks/register'

export = function volunteerRegistrationSteps() {

  this.setDefaultTimeout(60 * 1000);

  let actor: Actor;

  this.Given(/^(.*) wants to register for ravs$/, function (actorName: string) {
      // Write code here that turns the phrase above into concrete actions
      actor = Actor.named(actorName).whoCan(BrowseTheWeb.using(protractor.browser));
      actor.attemptsTo(
        Open.browserOn('http://127.0.0.1:3000')
      )
      // callback(null, 'pending');
  });

  this.When(/^she registers with her credentials$/, function (table, callback) {
      // Write code here that turns the phrase above into concrete actions
      actor.attemptsTo(
        register.forProfile('paul', 'h', 'phender9@uwo.ca', 'chrw123')
      )
      // callback(null, 'pending');
  });

  this.Then(/^she should see the appropriate title page$/, function () {
      // Write code here that turns the phrase above into concrete actions
      // callback(null, 'pending');
  });

  this.Then(/^the volunteers homepage$/, function () {
      // Write code here that turns the phrase above into concrete actions
      // callback(null, 'pending');
  });

}
