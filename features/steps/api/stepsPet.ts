import { Given, When, Then } from '../../support/fixtures';
import { expect, request } from '@playwright/test';
import data from '../../../utils/data.json';
import { validPetData, invalidPetData } from '../../../utils/petData';
import axios from 'axios';
import assert from 'assert';

let apiResponse: any;
let responseBody: any;
let petData: any;
let responseUpdatePet: any;
let responseDeletePet: any;
let responseAddPet: any;


When('I make a GET request to the Petstore API swagger.json endpoint', async () => {
    const req = await request.newContext();
    apiResponse = await req.get(`${data.api.petstoreSwaggerBaseUrl}/swagger.json`);
})

Then('the response should be successful', async () => {
    expect(apiResponse.ok()).toBeTruthy();
})

Given('I have access to the Petstore API', async () => {
    console.log('Accessing Petstore API...')
})

When('I request pets with status {string}', async ({ playwright }, status: string) => {

    const apiContext = await playwright.request.newContext();
    apiResponse = await apiContext.get(`${data.api.petstoreSwaggerBaseUrl}/pet/findByStatus?status=${status}`);
    responseBody = await apiResponse.json();

})

Then('the response status code should be {int}', async ({ }, statusCode: number) => {
    expect(apiResponse.status()).toBe(statusCode);
})

Then('the response should contain a list of pets', async () => {
    expect(Array.isArray(responseBody)).toBeTruthy();
    expect(responseBody.length).toBeGreaterThan(0);
})

Then('all pets in the list should have status {string}', async ({ }, expectedStatus: string) => {
    for (const pet of responseBody) {
        expect(pet).toHaveProperty('status');
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
    responseAddPet = await axios.post(`${data.api.petstoreSwaggerBaseUrl}/pet`, petData, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
})

Then('the response status should be {int}', async ({ }, statusCode: number) => {
    assert.strictEqual(responseAddPet.status, statusCode);
})

Then('the response should contain the pet name {string}', async ({ }, petName: string) => {
    expect(responseAddPet).toBeDefined();
    expect(responseAddPet.data).toBeDefined();
    expect(responseAddPet.data.name).toBe(petName);
    console.log(`Pet added successfully with name: ${responseAddPet.data.name}`);
});

When('I send the invalid POST request to add the pet', async () => {
    try {
        responseAddPet = await axios.post(`${data.api.petstoreSwaggerBaseUrl}/pet`, petData, {
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error: any) {
        responseAddPet = error.response;
        console.error('Error adding pet:', error.message);

    }
})

Then('the response status should not be {int}', async ({ }, statusCode: number) => {
    expect(responseAddPet.status).not.toBe(statusCode);
    expect(responseAddPet.status).toBeGreaterThanOrEqual(400);
});

When('I update the pet name to {string}', ({ }, newName: string) => {
    petData.name = newName;
});

When('I send a PUT request to update the pet', async () => {
    try {
        responseUpdatePet = await axios.put(`${data.api.petstoreSwaggerBaseUrl}/pet`, petData, {
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error: any) {
        responseUpdatePet = error.response;
        console.error('Error during PUT:', error.message);
    }
})

Then('the updated response should contain the pet name {string}', async ({ }, petName: string) => {
    const response = responseUpdatePet || responseAddPet;
    expect(response.data.name).toBe(petName);
})

When('I send a DELETE request to delete the pet with the pet id', async () => {
    const petId = petData.id;
    console.log(`Deleting pet with ID: ${petId}`);
    responseDeletePet = await axios.delete(`${data.api.petstoreSwaggerBaseUrl}/pet/${petId}`, {
        headers: { 'Content-Type': 'application/json' }
    });
})

Then('the delete response status should be {int}', async ({ }, statusCode: number) => {
    assert.equal(responseDeletePet.status, statusCode);
})
