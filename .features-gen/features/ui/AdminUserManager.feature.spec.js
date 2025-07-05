// Generated from: features\ui\AdminUserManager.feature
import { methods as test } from "../../../features/support/fixtures.ts";

test.describe('Admin User Management', () => {

  test.beforeEach('Background', async ({ Given, pageManager, And }) => {
    await Given('I navigate to the OrangeHRM login page', null, { pageManager }); 
    await And('the login page is loaded successfully', null, { pageManager }); 
  });
  
  test('Search for a user by username and employee name', { tag: ['@ui', '@search', '@positive'] }, async ({ When, pageManager, Then, Given, And }) => { 
    await When('I login with the demo credentials', null, { pageManager }); 
    await Then('I should be redirected to the page dashboard', null, { pageManager }); 
    await Given('I navigate to the Admin User Management page', null, { pageManager }); 
    await And('I fill the username input field with "Admin"', null, { pageManager }); 
    await And('I select "Admin" as the user role', null, { pageManager }); 
    await And('I select "Enabled" as the status', null, { pageManager }); 
    await And('I click the Search button', null, { pageManager }); 
    await Then('I verify that the search result contains:', {"dataTable":{"rows":[{"cells":[{"value":"username"},{"value":"Admin"}]},{"cells":[{"value":"userRole"},{"value":"Admin"}]},{"cells":[{"value":"status"},{"value":"Enabled"}]}]}}, { pageManager }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('features\\ui\\AdminUserManager.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":11,"pickleLine":11,"tags":["@ui","@search","@positive"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I navigate to the OrangeHRM login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"And the login page is loaded successfully","isBg":true,"stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When I login with the demo credentials","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then I should be redirected to the page dashboard","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":14,"keywordType":"Context","textWithKeyword":"Given I navigate to the Admin User Management page","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":15,"keywordType":"Context","textWithKeyword":"And I fill the username input field with \"Admin\"","stepMatchArguments":[{"group":{"start":37,"value":"\"Admin\"","children":[{"start":38,"value":"Admin","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":16,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"And I select \"Admin\" as the user role","stepMatchArguments":[{"group":{"start":9,"value":"\"Admin\"","children":[{"start":10,"value":"Admin","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":18,"keywordType":"Context","textWithKeyword":"And I select \"Enabled\" as the status","stepMatchArguments":[{"group":{"start":9,"value":"\"Enabled\"","children":[{"start":10,"value":"Enabled","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"And I click the Search button","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then I verify that the search result contains:","stepMatchArguments":[]}]},
]; // bdd-data-end