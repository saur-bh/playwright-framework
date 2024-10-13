@regression
Feature: GMX Email Login
    Background: Pre-condition
        Given I open the URL "https://www.gmx.net/"

    @invalid
    Scenario Outline: Empty email and password

        When I enter the "<email>" into the email field
        And I enter the "<password>" into the field
        And I click on the Login button
        Then I should see an error message

        Examples:
            | email             | password      |
            |                   |               |
            | valid@example.com |               |
            |                   | validpassword |
    @random
    Scenario: Random username and password

        When I enter a random email into the email field
        And I enter a random password into the password field
        And I click on the Login button
        Then I should see an error message
