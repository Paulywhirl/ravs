Feature: Volunteer Register App

As a Volunteer,
I want to register for ravs,
In order to participate in sessions

Scenario: register as Volunteer
  Given Paul wants to register for ravs
  When he registers with her credentials
    | email           | password |
    | phender9@uwo.ca | chrw123  |
  Then he should see the appropriate title page
