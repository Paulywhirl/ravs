Feature: Director login

As a Director,
I want to login to ravs,
In order to create necessary sessions

Scenario: login as Director
  Given Pam wants to login
  When she logins with his credentials
  Then she should see the appropriate title page
  And the directors homepage
