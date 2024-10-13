Feature: GMX Email Login

    Scenario Outline: Empty email and password
        Given I open the URL "https://www.gmx.net/"
        When I enter the "<email>" into the email field
        And I enter the "<password>" into the field
        And I click on the Login button
        Then I should see an error message

        Examples:
            | email             | password      |
            |                   |               |
            | valid@example.com |               |
            |                   | validpassword |

    Scenario Outline: Random username and password
        Given I open the URL "https://www.gmx.net/"
        When I enter a random email into the email field
        And I enter a random password into the password field
        And I click on the Login button
        Then I should see an error message
