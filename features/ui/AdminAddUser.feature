Feature: Add new admin user in OrangeHRM
  As an admin user
  I want to add a new user in the system
  So that I can manage user accounts

  Background:
    Given I navigate to the OrangeHRM login page
    And the login page is loaded successfully

  @ui @adduser @positive
  #Scenario: Add a new admin user with valid credentials
    #When I login with the demo credentials
    #Then I should be redirected to the page dashboard
    #Given I navigate to the Admin User Management page
    #And I fill the username input field with "PericaTest"
    #And I click the Search button
    #Then I should see a message indicating that no records were found
    #And I click the Add User button
    #And I select "Admin" as the new user role
    #And I enter "T" as the new first suggestion employee name
    #And I select "Enabled" as the new status
    #And I enter new username from data json file
    #And I enter new password from data json file
    #And I confirm new password from data json file
    #And I click the Save button
    #Then I should be redirected to the page admin user managment

  @ui @addRandomUser @positive
  Scenario: Add a new random admin user with valid credentials
    When I login with the demo credentials
    Then I should be redirected to the page dashboard
    Given I navigate to the Admin User Management page
    And I click the Add User button
    And I add a new admin user with random data
    Then I should be redirected to the page admin user managment
    And I fill the username input field with New Randndom User
    And I click the Search button
    Then I verify If random user is added   

  @ui @addDeleteNewUser @positive
  Scenario: Add and Delete new admin user with valid credentials
    When I login with the demo credentials
    Then I should be redirected to the page dashboard
    Given I navigate to the Admin User Management page
    And I fill the username input field with "Perica"
    And I click the Search button
    Then I should see a message indicating that no records were found
    And I click the Add User button
    And I select "Admin" as the new user role
    And I enter "T" as the new first suggestion employee name
    And I select "Enabled" as the new status
    And I enter new username from data json file
    And I enter new password from data json file
    And I confirm new password from data json file
    And I click the Save button
    Then I should be redirected to the page admin user managment
    And I fill the username input field with "Perica"
    And I click the Search button
    Then I verify that the search result contains:
      | username | Perica  |
      | userRole | Admin   |
      | status   | Enabled |
    Then I click the checkbox for user "Perica"
    And I click the Delete Selected button
    Then I confirm the deletion in the dialog
    And I fill the username input field with "Perica"
    And I click the Search button
    Then I should see a message indicating that no records were found
