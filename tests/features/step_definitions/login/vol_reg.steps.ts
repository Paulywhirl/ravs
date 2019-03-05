import { Actor } from 'serenity-js/protractor';

export = function volunteerRegistrationSteps() {

  let actor: Actor;

  this.Given(/^(.*) wants to register for ravs$/, function (actorName: string, callback) {
      // Write code here that turns the phrase above into concrete actions
      actor = Actor.named(actorName);
      callback(null, 'pending');
  });

  this.When(/^she registers with her credentials$/, function (table, callback) {
      // Write code here that turns the phrase above into concrete actions
      callback(null, 'pending');
  });

  this.Then(/^she should see the appropriate title page$/, function (callback) {
      // Write code here that turns the phrase above into concrete actions
      callback(null, 'pending');
  });

  this.Then(/^the volunteers homepage$/, function (callback) {
      // Write code here that turns the phrase above into concrete actions
      callback(null, 'pending');
  });

}
