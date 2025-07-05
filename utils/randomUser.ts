import { faker } from '@faker-js/faker';

export type UserModel = {
  role: string;
  employeeName: string;
  status: string;
  username: string;
  password: string;
};


function generatePasswordWithAtLeastOneNumber(length: number): string {
  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';

  // Ensure at least one number is included
  let password = numbers[Math.floor(Math.random() * numbers.length)];

  // Fill the rest randomly from letters + numbers
  const allChars = letters + numbers;
  for (let i = 1; i < length; i++) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  // Shuffle the password so the number isn't always first
  return password.split('').sort(() => 0.5 - Math.random()).join('');
}

export function generateRandomUser(): UserModel {
  return {
    role: "Admin",
    employeeName: "T",
    status: "Enabled",
    username: faker.internet.userName().toLowerCase(),   
    password: generatePasswordWithAtLeastOneNumber(12),
  };
}