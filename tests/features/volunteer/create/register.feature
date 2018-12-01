Feature: Registering for a session

As a volunteer,
I want to register for a session,
In order to move forward in my training

Scenario: register for a session
  Given Tim is logged in to ravs
  When he registers for the following session
    | sessionName | sessionNumber |
    |             |               |
  Then he should see that the session is available for registration
  And receives a notification
