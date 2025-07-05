// Generated from: features\ui\AdminAddUser.feature
import { methods as test } from "../../../features/support/fixtures.ts";

test.describe('Add new admin user in OrangeHRM', () => {

  test.beforeEach('Background', async ({ Given, pageManager, And }) => {
    await Given('I navigate to the OrangeHRM login page', null, { pageManager }); 
    await And('the login page is loaded successfully', null, { pageManager }); 
  });
  
  test('Add a new random admin user with valid credentials', { tag: ['@ui', '@adduser', '@positive', '@addRandomUser'] }, async ({ When, pageManager, Then, Given, And }) => { 
    await When('I login with the demo credentials', null, { pageManager }); 
    await Then('I should be redirected to the page dashboard', null, { pageManager }); 
    await Given('I navigate to the Admin User Management page', null, { pageManager }); 
    await And('I click the Add User button', null, { pageManager }); 
    await And('I add a new admin user with random data', null, { pageManager }); 
    await Then('I should be redirected to the page admin user managment', null, { pageManager }); 
    await And('I fill the username input field with New Randndom User', null, { pageManager }); 
    await And('I click the Search button', null, { pageManager }); 
    await Then('I verify If random user is added', null, { pageManager }); 
  });

  test('Add and Delete new admin user with valid credentials', { tag: ['@ui', '@addDeleteNewUser', '@positive'] }, async ({ When, pageManager, Then, Given, And }) => { 
    await When('I login with the demo credentials', null, { pageManager }); 
    await Then('I should be redirected to the page dashboard', null, { pageManager }); 
    await Given('I navigate to the Admin User Management page', null, { pageManager }); 
    await And('I fill the username input field with "Perica"', null, { pageManager }); 
    await And('I click the Search button', null, { pageManager }); 
    await Then('I should see a message indicating that no records were found', null, { pageManager }); 
    await And('I click the Add User button', null, { pageManager }); 
    await And('I select "Admin" as the new user role', null, { pageManager }); 
    await And('I enter "T" as the new first suggestion employee name', null, { pageManager }); 
    await And('I select "Enabled" as the new status', null, { pageManager }); 
    await And('I enter new username from data json file', null, { pageManager }); 
    await And('I enter new password from data json file', null, { pageManager }); 
    await And('I confirm new password from data json file', null, { pageManager }); 
    await And('I click the Save button', null, { pageManager }); 
    await Then('I should be redirected to the page admin user managment', null, { pageManager }); 
    await And('I fill the username input field with "Perica"', null, { pageManager }); 
    await And('I click the Search button', null, { pageManager }); 
    await Then('I verify that the search result contains:', {"dataTable":{"rows":[{"cells":[{"value":"username"},{"value":"Perica"}]},{"cells":[{"value":"userRole"},{"value":"Admin"}]},{"cells":[{"value":"status"},{"value":"Enabled"}]}]}}, { pageManager }); 
    await Then('I click the checkbox for user "Perica"', null, { pageManager }); 
    await And('I click the Delete Selected button', null, { pageManager }); 
    await Then('I confirm the deletion in the dialog', null, { pageManager }); 
    await And('I fill the username input field with "Perica"', null, { pageManager }); 
    await And('I click the Search button', null, { pageManager }); 
    await Then('I should see a message indicating that no records were found', null, { pageManager }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('features\\ui\\AdminAddUser.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":11,"pickleLine":29,"tags":["@ui","@adduser","@positive","@addRandomUser"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I navigate to the OrangeHRM login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"And the login page is loaded successfully","isBg":true,"stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":30,"keywordType":"Action","textWithKeyword":"When I login with the demo credentials","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"Then I should be redirected to the page dashboard","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":32,"keywordType":"Context","textWithKeyword":"Given I navigate to the Admin User Management page","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":33,"keywordType":"Context","textWithKeyword":"And I click the Add User button","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":34,"keywordType":"Context","textWithKeyword":"And I add a new admin user with random data","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":35,"keywordType":"Outcome","textWithKeyword":"Then I should be redirected to the page admin user managment","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":36,"keywordType":"Outcome","textWithKeyword":"And I fill the username input field with New Randndom User","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":37,"keywordType":"Outcome","textWithKeyword":"And I click the Search button","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":38,"keywordType":"Outcome","textWithKeyword":"Then I verify If random user is added","stepMatchArguments":[]}]},
  {"pwTestLine":23,"pickleLine":41,"tags":["@ui","@addDeleteNewUser","@positive"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I navigate to the OrangeHRM login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"And the login page is loaded successfully","isBg":true,"stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":42,"keywordType":"Action","textWithKeyword":"When I login with the demo credentials","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":43,"keywordType":"Outcome","textWithKeyword":"Then I should be redirected to the page dashboard","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":44,"keywordType":"Context","textWithKeyword":"Given I navigate to the Admin User Management page","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":45,"keywordType":"Context","textWithKeyword":"And I fill the username input field with \"Perica\"","stepMatchArguments":[{"group":{"start":37,"value":"\"Perica\"","children":[{"start":38,"value":"Perica","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":28,"gherkinStepLine":46,"keywordType":"Context","textWithKeyword":"And I click the Search button","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":47,"keywordType":"Outcome","textWithKeyword":"Then I should see a message indicating that no records were found","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":48,"keywordType":"Outcome","textWithKeyword":"And I click the Add User button","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":49,"keywordType":"Outcome","textWithKeyword":"And I select \"Admin\" as the new user role","stepMatchArguments":[{"group":{"start":9,"value":"\"Admin\"","children":[{"start":10,"value":"Admin","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":32,"gherkinStepLine":50,"keywordType":"Outcome","textWithKeyword":"And I enter \"T\" as the new first suggestion employee name","stepMatchArguments":[{"group":{"start":8,"value":"\"T\"","children":[{"start":9,"value":"T","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":33,"gherkinStepLine":51,"keywordType":"Outcome","textWithKeyword":"And I select \"Enabled\" as the new status","stepMatchArguments":[{"group":{"start":9,"value":"\"Enabled\"","children":[{"start":10,"value":"Enabled","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":34,"gherkinStepLine":52,"keywordType":"Outcome","textWithKeyword":"And I enter new username from data json file","stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":53,"keywordType":"Outcome","textWithKeyword":"And I enter new password from data json file","stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":54,"keywordType":"Outcome","textWithKeyword":"And I confirm new password from data json file","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":55,"keywordType":"Outcome","textWithKeyword":"And I click the Save button","stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":56,"keywordType":"Outcome","textWithKeyword":"Then I should be redirected to the page admin user managment","stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":57,"keywordType":"Outcome","textWithKeyword":"And I fill the username input field with \"Perica\"","stepMatchArguments":[{"group":{"start":37,"value":"\"Perica\"","children":[{"start":38,"value":"Perica","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":40,"gherkinStepLine":58,"keywordType":"Outcome","textWithKeyword":"And I click the Search button","stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":59,"keywordType":"Outcome","textWithKeyword":"Then I verify that the search result contains:","stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":63,"keywordType":"Outcome","textWithKeyword":"Then I click the checkbox for user \"Perica\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Perica\"","children":[{"start":31,"value":"Perica","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":43,"gherkinStepLine":64,"keywordType":"Outcome","textWithKeyword":"And I click the Delete Selected button","stepMatchArguments":[]},{"pwStepLine":44,"gherkinStepLine":65,"keywordType":"Outcome","textWithKeyword":"Then I confirm the deletion in the dialog","stepMatchArguments":[]},{"pwStepLine":45,"gherkinStepLine":66,"keywordType":"Outcome","textWithKeyword":"And I fill the username input field with \"Perica\"","stepMatchArguments":[{"group":{"start":37,"value":"\"Perica\"","children":[{"start":38,"value":"Perica","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":46,"gherkinStepLine":67,"keywordType":"Outcome","textWithKeyword":"And I click the Search button","stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":68,"keywordType":"Outcome","textWithKeyword":"Then I should see a message indicating that no records were found","stepMatchArguments":[]}]},
]; // bdd-data-end