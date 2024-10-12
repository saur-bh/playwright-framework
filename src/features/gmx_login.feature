Feature: GMX Email Login

    Scenario Outline: Invalid login to GMX email
        Given I open the URL "https://www.gmx.net/"
        When I enter the email into the email field
        And I enter the password into the field
        And I click on the Login button
        Then I should see an error message "Login leider nicht erfolgreich"
        And the URL should be "https://www.gmx.net/logoutlounge/?status=login-failed"
        And I should see a "Zurück zum Login" button
