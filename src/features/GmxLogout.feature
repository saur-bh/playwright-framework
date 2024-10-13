@regression @logout
Feature: GMX Email Logout Button
        
    @logoutfail
    Scenario Outline: Empty email and password
        Given I open the URL "https://www.gmx.net/logoutlounge/?status=login-failed"
        And I should see an error message
        Then I click on Zurück zum Login button
        And I should see the login page
        
     @logoutpass @smoke
    Scenario Outline: Empty email and password
        Given I open the URL "https://www.gmx.net/logoutlounge"
        And I should see a message
        Then I click on Zurück zum Login button
        And I should see the login page
        

