Feature: OrangeHRM Login
  As a user of OrangeHRM system
  I want to be able to login to the application
  So that I can access the HR management features

  Background:
    Given I navigate to the OrangeHRM login page
    And the login page is loaded successfully

  @ui @smoke @positive
  Scenario: Successful login with valid credentials
    When I enter username "Admin"
    And I enter password "admin123"
    And I click the login button
    Then I should be redirected to the page dashboard

  @ui @smoke @positive
  Scenario: Login with demo credentials
    When I login with the demo credentials
    Then I should be redirected to the page dashboard

  @ui @negative
  Scenario: Login with invalid username
    When I enter username "InvalidUser"
    And I enter password "admin123"
    And I click the login button
    Then I should see an error message

