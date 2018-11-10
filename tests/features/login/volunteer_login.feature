Feature: Volunteer login

As a Volunteer,
I want to login to ravs,
In order to create necessary sessions

Scenario: login as Volunteer
  Given: <Emily> wants to login
  When: she logins with his credentials
  Then: she should see the appropriate title page
  And: the volunteers homepage
