Feature: Create session

As a director,
I want to create a session for my department,
In order to allow volunteers to register and get experience with the radio station

Scenario: Creation of a session
  Given Pam is logged in ravs
  When she creates a session
    | sessionName | sessionNumber | Date  | startTime | endTime |
    |             |               |       |           |         |
  Then she should see the appropriate session added to the Calendar
  And contains all the correct information
