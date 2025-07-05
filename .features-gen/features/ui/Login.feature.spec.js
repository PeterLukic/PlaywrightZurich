// Generated from: features\ui\Login.feature
import { methods as test } from "../../../features/support/fixtures.ts";

test.describe('OrangeHRM Login', () => {

  test.beforeEach('Background', async ({ Given, pageManager, And }) => {
    await Given('I navigate to the OrangeHRM login page', null, { pageManager }); 
    await And('the login page is loaded successfully', null, { pageManager }); 
  });
  
  test('Successful login with valid credentials', { tag: ['@ui', '@smoke', '@positive'] }, async ({ When, pageManager, And, Then }) => { 
    await When('I enter username "Admin"', null, { pageManager }); 
    await And('I enter password "admin123"', null, { pageManager }); 
    await And('I click the login button', null, { pageManager }); 
    await Then('I should be redirected to the page dashboard', null, { pageManager }); 
  });

  test('Login with demo credentials', { tag: ['@ui', '@smoke', '@positive1'] }, async ({ When, pageManager, Then }) => { 
    await When('I login with the demo credentials', null, { pageManager }); 
    await Then('I should be redirected to the page dashboard', null, { pageManager }); 
  });

  test('Login with invalid username', { tag: ['@ui', '@negative'] }, async ({ When, pageManager, And, Then }) => { 
    await When('I enter username "InvalidUser"', null, { pageManager }); 
    await And('I enter password "admin123"', null, { pageManager }); 
    await And('I click the login button', null, { pageManager }); 
    await Then('I should see an error message', null, { pageManager }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('features\\ui\\Login.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":11,"pickleLine":11,"tags":["@ui","@smoke","@positive"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I navigate to the OrangeHRM login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"And the login page is loaded successfully","isBg":true,"stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When I enter username \"Admin\"","stepMatchArguments":[{"group":{"start":17,"value":"\"Admin\"","children":[{"start":18,"value":"Admin","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"And I enter password \"admin123\"","stepMatchArguments":[{"group":{"start":17,"value":"\"admin123\"","children":[{"start":18,"value":"admin123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"And I click the login button","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then I should be redirected to the page dashboard","stepMatchArguments":[]}]},
  {"pwTestLine":18,"pickleLine":18,"tags":["@ui","@smoke","@positive1"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I navigate to the OrangeHRM login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"And the login page is loaded successfully","isBg":true,"stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"When I login with the demo credentials","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then I should be redirected to the page dashboard","stepMatchArguments":[]}]},
  {"pwTestLine":23,"pickleLine":23,"tags":["@ui","@negative"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I navigate to the OrangeHRM login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"And the login page is loaded successfully","isBg":true,"stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"When I enter username \"InvalidUser\"","stepMatchArguments":[{"group":{"start":17,"value":"\"InvalidUser\"","children":[{"start":18,"value":"InvalidUser","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":25,"gherkinStepLine":25,"keywordType":"Action","textWithKeyword":"And I enter password \"admin123\"","stepMatchArguments":[{"group":{"start":17,"value":"\"admin123\"","children":[{"start":18,"value":"admin123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":26,"gherkinStepLine":26,"keywordType":"Action","textWithKeyword":"And I click the login button","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"Then I should see an error message","stepMatchArguments":[]}]},
]; // bdd-data-end