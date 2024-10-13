@regression @login
Feature: GMX Email Login
    Background: Pre-condition
        Given I open the URL "https://www.gmx.net/"

    @empty
    Scenario Outline: Empty email and password

        When I enter the "<email>" into the email field
        And I enter the "<password>" into the password field
        And I click on the Login button
        Then I should see an error message

        Examples:
            | email             | password      |
            |                   |               |
            | valid@example.com |               |
            |                   | validpassword |
            | saurabh@gmx.de    | Saurabh@06v1   |
    @random
    Scenario: Random username and password

        When I enter a random email into the email field
        And I enter a random password into the password field
        And I click on the Login button
        Then I should see an error message

    @validlogin
    Scenario: Valid login using email and password

        When I enter the "saurabh@gmx.de" into the email field
        And I enter the "Saurabh@06v" into the password field
        And I click on the Login button
        Then I should see the action menu