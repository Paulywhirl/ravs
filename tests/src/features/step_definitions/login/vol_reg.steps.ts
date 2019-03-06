import { Actor } from 'serenity-js/protractor';
import { protractor } from 'protractor';
import { Open, PerformsTasks, BrowseTheWeb, ResizeBrowserWindow, UseAngular, Wait, Is }
 from 'serenity-js/lib/screenplay-protractor';
import { See } from 'serenity-js/lib/screenplay';

// const Register = require('@specs/tasks/registers');
import { register } from '../../../specs/tasks/register'
import { dashboardComponents } from '../../../specs/questions/dashboardComponents'
import { dashboard } from '../../../specs/user_interface/dashboard'

import chai = require('chai');
import chaiAsPromised = require('chai-as-promised');


export = function volunteerRegistrationSteps() {

  this.setDefaultTimeout(60 * 1000);

  let actor: Actor;

  chai.use(chaiAsPromised);

  const expect = chai.expect;

  this.Given(/^(.*) wants to register for ravs$/, function (actorName: string) {
      // Write code here that turns the phrase above into concrete actions
      actor = Actor.named(actorName).whoCan(BrowseTheWeb.using(protractor.browser));
      return actor.attemptsTo(
        UseAngular.disableSynchronisation(),
        Open.browserOn('http://127.0.0.1:3000')
      )
      // callback(null, 'pending');
  });

  this.When(/^she registers with her credentials$/, function (table) {
      // Write code here that turns the phrase above into concrete actions
      return actor.attemptsTo(
        register.forProfile('phender9@uwo.ca', 'chrw123', 'Paul', 'Henderson')
      )
      // callback(null, 'pending');
  });

  this.Then(/^she should see the appropriate title page$/, function () {
      // Write code here that turns the phrase above into concrete actions
      actor.attemptsTo(
        UseAngular.disableSynchronisation(),
        Wait.until(dashboard.header, Is.visible())
      )
      return actor.attemptsTo(
        See.if(
          dashboardComponents.isDisplayed, actual => expect(actual).to.eventually.eql('Dashboard')
        ),
      )
      // expect(actor.toSee(dashboardComponents.isDisplayed)).eventually.equal('Dashboard')
      // callback(null, 'pending');
  });

  this.Then(/^the volunteers homepage$/, function () {
      // Write code here that turns the phrase above into concrete actions
      // callback(null, 'pending');
  });

}
