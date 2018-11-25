Feature: Delete session

As a director,
I want to delete a session for my department,
In order to correct a mixup with the sessions

Scenario: Deletion of a session
  Given Jennie is logged in ravs
  When she deletes a session named "203"
  Then she should see the appropriate session no longer visible in the Calendar
