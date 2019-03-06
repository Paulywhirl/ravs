Feature: Viewing global calendar

As a user,
I want to view the monthly-generated Calendar,
In order to see which sessions/events are open that month

Scenario: user views global Calendar
  Given John is logged in ravs
  When he navigates to the global calendar
  Then he should see the calendar display the correct sessions for that month
