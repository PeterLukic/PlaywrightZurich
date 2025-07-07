import { Given, When, Then } from '../../support/fixtures';
import { expect } from '@playwright/test';
import assert from 'assert';

import { PetstoreApiHelper } from '../../support/petstoreApiHelper';
import { validPetData, invalidPetData } from '../../../utils/petData';

let response: any;
let petData: any;

When('I make a GET request to the Petstore API swagger.json endpoint', async () => {
  response = await PetstoreApiHelper.getSwaggerJson();
});

Then('the response should be successful', async () => {
  expect(response.status).toBe(200);
});

Given('I have access to the Petstore API', async () => {
  console.log('Accessing Petstore API...');
});


When('I request pets with status {string}', async ({}, status: string) => {
  response = await PetstoreApiHelper.findPetsByStatus(status);
});

Then('the response status code should be {int}', async ({}, statusCode: number) => {
  expect(response.status).toBe(statusCode);
});

Then('the response should contain a list of pets', () => {
  expect(Array.isArray(response.data)).toBeTruthy();
  expect(response.data.length).toBeGreaterThan(0);
});


Then('all pets in the list should have status {string}', ({}, expectedStatus: string) => {
  for (const pet of response.data) {
    expect(pet.status).toBe(expectedStatus);
  }
});

Given('I have the pet data', () => {
  petData = { ...validPetData };
});

Given('I have invalid pet data', () => {
  petData = { ...invalidPetData };
});

When('I send a POST request to add the pet', async () => {
  response = await PetstoreApiHelper.addPet(petData);
});

Then('the response status should be {int}', async ({}, statusCode: number) => {
  assert.strictEqual(response.status, statusCode);
});


Then('the response should contain the pet name {string}', async ({}, petName: string) => {
  expect(response.data.name).toBe(petName);
});

When('I send the invalid POST request to add the pet', async () => {
  try {
    response = await PetstoreApiHelper.addPet(petData);
  } catch (error: any) {
    response = error.response;
  }
});


Then('the response status should not be {int}', async ({}, statusCode: number) => {
  expect(response.status).not.toBe(statusCode);
  expect(response.status).toBeGreaterThanOrEqual(400);
});


When('I update the pet name to {string}', ({}, newName: string) => {
  petData.name = newName;
});

When('I send a PUT request to update the pet', async () => {
  try {
    response = await PetstoreApiHelper.updatePet(petData);
  } catch (error: any) {
    response = error.response;
  }
});


Then('the updated response should contain the pet name {string}', async ({}, petName: string) => {
  expect(response.data.name).toBe(petName);
});

When('I send a DELETE request to delete the pet with the pet id', async () => {
  const petId = petData.id;
  response = await PetstoreApiHelper.deletePet(petId);
});


Then('the delete response status should be {int}', async ({}, statusCode: number) => {
  expect(response.status).toBe(statusCode);
});