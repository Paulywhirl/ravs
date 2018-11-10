Feature: Director login

As a Director,
I want to login to ravs,
In order to create necessary sessions

Scenario: login as Director
  Given: <Paul> wants to login
  When: he logins with his credentials
  Then: he should see the appropriate title page
  And: the directors homepage
