Feature: Petstore API
    Testing GET request for Petstore API

  @api @TestPratice
  Scenario: Get Petstore Swagger JSON
    When I make a GET request to the Petstore API swagger.json endpoint
    Then the response should be successful

  @api @getPending
  Scenario: Retrieve pets with status 'pending'
    Given I have access to the Petstore API
    When I request pets with status "pending"
    Then the response status code should be 200
    And the response should be successful
    And the response should contain a list of pets
    And all pets in the list should have status "pending"

  @api @getAvailable
  Scenario: Retrieve pets with status 'available'
    Given I have access to the Petstore API
    When I request pets with status "available"
    Then the response status code should be 200
    And the response should be successful
    And the response should contain a list of pets
    And all pets in the list should have status "available"

  @api @getPetsByStatus
  Scenario Outline: Retrieve pets with status '<status>'
    Given I have access to the Petstore API
    When I request pets with status "<status>"
    Then the response status code should be 200
    And the response should be successful
    And the response should contain a list of pets
    And all pets in the list should have status "<status>"

    Examples:
      | status    |
      | pending   |
      | available |
      | sold      |

  @api @addPet
  Scenario: Successfully add a new pet with valid data
    Given I have the pet data
    When I send a POST request to add the pet
    Then the response status should be 200
    And the response should contain the pet name "Buddy"

  @api @addInvalidPet
  Scenario: Add invalid pet without a name
    Given I have invalid pet data
    When I send the invalid POST request to add the pet
    Then the response status should not be 200

  @api @updatePet
  Scenario: Successfully update an existing pet
    Given I have the pet data
    When I send a POST request to add the pet
    And I update the pet name to "Max"
    When I send a PUT request to update the pet
    Then the response status should be 200
    And the updated response should contain the pet name "Max"

  @api @deletePet
  Scenario: Successfully create and delete a pet
    Given I have the pet data
    When I send a POST request to add the pet
    Then the response status should be 200
    And the response should contain the pet name "Buddy"
    When I send a DELETE request to delete the pet with the pet id
    Then the delete response status should be 200
