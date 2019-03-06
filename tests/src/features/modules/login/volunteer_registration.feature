Feature: Volunteer Register App

As a Volunteer,
I want to register for ravs,
In order to participate in sessions

Scenario: register as Volunteer
  Given Emily wants to register for ravs
  When she registers with her credentials
    | email           | password |
    | phender9@uwo.ca | chrw123  |
  Then she should see the appropriate title page
  And the volunteers homepage
