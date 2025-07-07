// Generated from: features\api\Pet.feature
import { methods as test } from "../../../features/support/fixtures.ts";

test.describe('Petstore API', () => {

  test('Get Petstore Swagger JSON', { tag: ['@api', '@TestPratice'] }, async ({ When, Then }) => { 
    await When('I make a GET request to the Petstore API swagger.json endpoint'); 
    await Then('the response should be successful'); 
  });

  test('Retrieve pets with status \'pending\'', { tag: ['@api', '@getPending'] }, async ({ Given, When, Then, And }) => { 
    await Given('I have access to the Petstore API'); 
    await When('I request pets with status "pending"'); 
    await Then('the response status code should be 200'); 
    await And('the response should be successful'); 
    await And('the response should contain a list of pets'); 
    await And('all pets in the list should have status "pending"'); 
  });

  test('Retrieve pets with status \'available\'', { tag: ['@api', '@getAvailable'] }, async ({ Given, When, Then, And }) => { 
    await Given('I have access to the Petstore API'); 
    await When('I request pets with status "available"'); 
    await Then('the response status code should be 200'); 
    await And('the response should be successful'); 
    await And('the response should contain a list of pets'); 
    await And('all pets in the list should have status "available"'); 
  });

  test.describe('Retrieve pets with status \'<status>\'', () => {

    test('Retrieve pets with status \'pending\'', { tag: ['@api', '@getPetsByStatus'] }, async ({ Given, When, Then, And }) => { 
      await Given('I have access to the Petstore API'); 
      await When('I request pets with status "pending"'); 
      await Then('the response status code should be 200'); 
      await And('the response should be successful'); 
      await And('the response should contain a list of pets'); 
      await And('all pets in the list should have status "pending"'); 
    });

    test('Retrieve pets with status \'available\'', { tag: ['@api', '@getPetsByStatus'] }, async ({ Given, When, Then, And }) => { 
      await Given('I have access to the Petstore API'); 
      await When('I request pets with status "available"'); 
      await Then('the response status code should be 200'); 
      await And('the response should be successful'); 
      await And('the response should contain a list of pets'); 
      await And('all pets in the list should have status "available"'); 
    });

    test('Retrieve pets with status \'sold\'', { tag: ['@api', '@getPetsByStatus'] }, async ({ Given, When, Then, And }) => { 
      await Given('I have access to the Petstore API'); 
      await When('I request pets with status "sold"'); 
      await Then('the response status code should be 200'); 
      await And('the response should be successful'); 
      await And('the response should contain a list of pets'); 
      await And('all pets in the list should have status "sold"'); 
    });

  });

  test('Successfully add a new pet with valid data', { tag: ['@api', '@addPet'] }, async ({ Given, When, Then, And }) => { 
    await Given('I have the pet data'); 
    await When('I send a POST request to add the pet'); 
    await Then('the response status should be 200'); 
    await And('the response should contain the pet name "Buddy"'); 
  });

  test('Add invalid pet without a name', { tag: ['@api', '@addInvalidPet'] }, async ({ Given, When, Then }) => { 
    await Given('I have invalid pet data'); 
    await When('I send the invalid POST request to add the pet'); 
    await Then('the response status should not be 200'); 
  });

  test('Successfully update an existing pet', { tag: ['@api', '@updatePet'] }, async ({ Given, When, And, Then }) => { 
    await Given('I have the pet data'); 
    await When('I send a POST request to add the pet'); 
    await And('I update the pet name to "Max"'); 
    await When('I send a PUT request to update the pet'); 
    await Then('the response status should be 200'); 
    await And('the updated response should contain the pet name "Max"'); 
  });

  test('Successfully create and delete a pet', { tag: ['@api', '@deletePet'] }, async ({ Given, When, Then, And }) => { 
    await Given('I have the pet data'); 
    await When('I send a POST request to add the pet'); 
    await Then('the response status should be 200'); 
    await And('the response should contain the pet name "Buddy"'); 
    await When('I send a DELETE request to delete the pet with the pet id'); 
    await Then('the delete response status should be 200'); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('features\\api\\Pet.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":5,"tags":["@api","@TestPratice"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When I make a GET request to the Petstore API swagger.json endpoint","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then the response should be successful","stepMatchArguments":[]}]},
  {"pwTestLine":11,"pickleLine":10,"tags":["@api","@getPending"],"steps":[{"pwStepLine":12,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given I have access to the Petstore API","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When I request pets with status \"pending\"","stepMatchArguments":[{"group":{"start":27,"value":"\"pending\"","children":[{"start":28,"value":"pending","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then the response status code should be 200","stepMatchArguments":[{"group":{"start":35,"value":"200","children":[]},"parameterTypeName":"int"}]},{"pwStepLine":15,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"And the response should be successful","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"And the response should contain a list of pets","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"And all pets in the list should have status \"pending\"","stepMatchArguments":[{"group":{"start":40,"value":"\"pending\"","children":[{"start":41,"value":"pending","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":20,"pickleLine":19,"tags":["@api","@getAvailable"],"steps":[{"pwStepLine":21,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"Given I have access to the Petstore API","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When I request pets with status \"available\"","stepMatchArguments":[{"group":{"start":27,"value":"\"available\"","children":[{"start":28,"value":"available","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":23,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then the response status code should be 200","stepMatchArguments":[{"group":{"start":35,"value":"200","children":[]},"parameterTypeName":"int"}]},{"pwStepLine":24,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"And the response should be successful","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"And the response should contain a list of pets","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"And all pets in the list should have status \"available\"","stepMatchArguments":[{"group":{"start":40,"value":"\"available\"","children":[{"start":41,"value":"available","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":31,"pickleLine":38,"tags":["@api","@getPetsByStatus"],"steps":[{"pwStepLine":32,"gherkinStepLine":29,"keywordType":"Context","textWithKeyword":"Given I have access to the Petstore API","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":30,"keywordType":"Action","textWithKeyword":"When I request pets with status \"pending\"","stepMatchArguments":[{"group":{"start":27,"value":"\"pending\"","children":[{"start":28,"value":"pending","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":34,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"Then the response status code should be 200","stepMatchArguments":[{"group":{"start":35,"value":"200","children":[]},"parameterTypeName":"int"}]},{"pwStepLine":35,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"And the response should be successful","stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":33,"keywordType":"Outcome","textWithKeyword":"And the response should contain a list of pets","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":34,"keywordType":"Outcome","textWithKeyword":"And all pets in the list should have status \"pending\"","stepMatchArguments":[{"group":{"start":40,"value":"\"pending\"","children":[{"start":41,"value":"pending","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":40,"pickleLine":39,"tags":["@api","@getPetsByStatus"],"steps":[{"pwStepLine":41,"gherkinStepLine":29,"keywordType":"Context","textWithKeyword":"Given I have access to the Petstore API","stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":30,"keywordType":"Action","textWithKeyword":"When I request pets with status \"available\"","stepMatchArguments":[{"group":{"start":27,"value":"\"available\"","children":[{"start":28,"value":"available","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":43,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"Then the response status code should be 200","stepMatchArguments":[{"group":{"start":35,"value":"200","children":[]},"parameterTypeName":"int"}]},{"pwStepLine":44,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"And the response should be successful","stepMatchArguments":[]},{"pwStepLine":45,"gherkinStepLine":33,"keywordType":"Outcome","textWithKeyword":"And the response should contain a list of pets","stepMatchArguments":[]},{"pwStepLine":46,"gherkinStepLine":34,"keywordType":"Outcome","textWithKeyword":"And all pets in the list should have status \"available\"","stepMatchArguments":[{"group":{"start":40,"value":"\"available\"","children":[{"start":41,"value":"available","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":49,"pickleLine":40,"tags":["@api","@getPetsByStatus"],"steps":[{"pwStepLine":50,"gherkinStepLine":29,"keywordType":"Context","textWithKeyword":"Given I have access to the Petstore API","stepMatchArguments":[]},{"pwStepLine":51,"gherkinStepLine":30,"keywordType":"Action","textWithKeyword":"When I request pets with status \"sold\"","stepMatchArguments":[{"group":{"start":27,"value":"\"sold\"","children":[{"start":28,"value":"sold","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":52,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"Then the response status code should be 200","stepMatchArguments":[{"group":{"start":35,"value":"200","children":[]},"parameterTypeName":"int"}]},{"pwStepLine":53,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"And the response should be successful","stepMatchArguments":[]},{"pwStepLine":54,"gherkinStepLine":33,"keywordType":"Outcome","textWithKeyword":"And the response should contain a list of pets","stepMatchArguments":[]},{"pwStepLine":55,"gherkinStepLine":34,"keywordType":"Outcome","textWithKeyword":"And all pets in the list should have status \"sold\"","stepMatchArguments":[{"group":{"start":40,"value":"\"sold\"","children":[{"start":41,"value":"sold","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":60,"pickleLine":43,"tags":["@api","@addPet"],"steps":[{"pwStepLine":61,"gherkinStepLine":44,"keywordType":"Context","textWithKeyword":"Given I have the pet data","stepMatchArguments":[]},{"pwStepLine":62,"gherkinStepLine":45,"keywordType":"Action","textWithKeyword":"When I send a POST request to add the pet","stepMatchArguments":[]},{"pwStepLine":63,"gherkinStepLine":46,"keywordType":"Outcome","textWithKeyword":"Then the response status should be 200","stepMatchArguments":[{"group":{"start":30,"value":"200","children":[]},"parameterTypeName":"int"}]},{"pwStepLine":64,"gherkinStepLine":47,"keywordType":"Outcome","textWithKeyword":"And the response should contain the pet name \"Buddy\"","stepMatchArguments":[{"group":{"start":41,"value":"\"Buddy\"","children":[{"start":42,"value":"Buddy","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":67,"pickleLine":50,"tags":["@api","@addInvalidPet"],"steps":[{"pwStepLine":68,"gherkinStepLine":51,"keywordType":"Context","textWithKeyword":"Given I have invalid pet data","stepMatchArguments":[]},{"pwStepLine":69,"gherkinStepLine":52,"keywordType":"Action","textWithKeyword":"When I send the invalid POST request to add the pet","stepMatchArguments":[]},{"pwStepLine":70,"gherkinStepLine":53,"keywordType":"Outcome","textWithKeyword":"Then the response status should not be 200","stepMatchArguments":[{"group":{"start":34,"value":"200","children":[]},"parameterTypeName":"int"}]}]},
  {"pwTestLine":73,"pickleLine":56,"tags":["@api","@updatePet"],"steps":[{"pwStepLine":74,"gherkinStepLine":57,"keywordType":"Context","textWithKeyword":"Given I have the pet data","stepMatchArguments":[]},{"pwStepLine":75,"gherkinStepLine":58,"keywordType":"Action","textWithKeyword":"When I send a POST request to add the pet","stepMatchArguments":[]},{"pwStepLine":76,"gherkinStepLine":59,"keywordType":"Action","textWithKeyword":"And I update the pet name to \"Max\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Max\"","children":[{"start":26,"value":"Max","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":77,"gherkinStepLine":60,"keywordType":"Action","textWithKeyword":"When I send a PUT request to update the pet","stepMatchArguments":[]},{"pwStepLine":78,"gherkinStepLine":61,"keywordType":"Outcome","textWithKeyword":"Then the response status should be 200","stepMatchArguments":[{"group":{"start":30,"value":"200","children":[]},"parameterTypeName":"int"}]},{"pwStepLine":79,"gherkinStepLine":62,"keywordType":"Outcome","textWithKeyword":"And the updated response should contain the pet name \"Max\"","stepMatchArguments":[{"group":{"start":49,"value":"\"Max\"","children":[{"start":50,"value":"Max","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":82,"pickleLine":65,"tags":["@api","@deletePet"],"steps":[{"pwStepLine":83,"gherkinStepLine":66,"keywordType":"Context","textWithKeyword":"Given I have the pet data","stepMatchArguments":[]},{"pwStepLine":84,"gherkinStepLine":67,"keywordType":"Action","textWithKeyword":"When I send a POST request to add the pet","stepMatchArguments":[]},{"pwStepLine":85,"gherkinStepLine":68,"keywordType":"Outcome","textWithKeyword":"Then the response status should be 200","stepMatchArguments":[{"group":{"start":30,"value":"200","children":[]},"parameterTypeName":"int"}]},{"pwStepLine":86,"gherkinStepLine":69,"keywordType":"Outcome","textWithKeyword":"And the response should contain the pet name \"Buddy\"","stepMatchArguments":[{"group":{"start":41,"value":"\"Buddy\"","children":[{"start":42,"value":"Buddy","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":87,"gherkinStepLine":70,"keywordType":"Action","textWithKeyword":"When I send a DELETE request to delete the pet with the pet id","stepMatchArguments":[]},{"pwStepLine":88,"gherkinStepLine":71,"keywordType":"Outcome","textWithKeyword":"Then the delete response status should be 200","stepMatchArguments":[{"group":{"start":37,"value":"200","children":[]},"parameterTypeName":"int"}]}]},
]; // bdd-data-end