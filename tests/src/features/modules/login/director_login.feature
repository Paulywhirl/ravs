Feature: Director login

As a Director,
I want to login to ravs,
In order to create necessary sessions

Scenario: login as Director
  Given Paul wants to login
  When he logins with his credentials
    | email           | password |
    | phender9@uwo.ca | chrw123  |
  # Then he should see the appropriate title page
  And the necessary buttons available to him
