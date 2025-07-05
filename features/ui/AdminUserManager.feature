Feature: Admin User Management
  As an admin user
  I want to manage users in the system
  So that I can add, search, and reset user information

  Background:
    Given I navigate to the OrangeHRM login page
    And the login page is loaded successfully

  @ui @search @positive
  Scenario: Search for a user by username and employee name
    When I login with the demo credentials
    Then I should be redirected to the page dashboard
    Given I navigate to the Admin User Management page
    And I fill the username input field with "Admin"
    And I select "Admin" as the user role
    #And I enter "Orange Test" as the employee name -- optionall
    And I select "Enabled" as the status
    And I click the Search button
    Then I verify that the search result contains:
      | username     | Admin       |
      | userRole     | Admin       |
      | status       | Enabled     |
      #| employeeName | Orange Test |


