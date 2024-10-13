@regression @logout
Feature: GMX Email Logout Button
        
    @login-failed
    Scenario Outline: Empty email and password
        Given I open the URL "https://www.gmx.net/logoutlounge/?status=login-failed"
        And I should see an error message
        Then I click on 