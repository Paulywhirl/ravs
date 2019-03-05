Feature: Unregistering for a session

As a volunteer,
I want to unregister from a session,
In order to correct a mixup in my calendar

Scenario: unregister from a session
  Given Tim is logged in to ravs
  When he unregisters from the following session
    | sessionName | sessionNumber |
    |             |               |
  Then he should see that the session is available for registration
  And receives a notification
