import axios, { AxiosResponse } from 'axios';
import data from '../../utils/data.json';

export class PetstoreApiHelper {
  static async getSwaggerJson(): Promise<AxiosResponse> {
    return await axios.get(`${data.api.petstoreSwaggerBaseUrl}/swagger.json`);
  }

  static async findPetsByStatus(status: string): Promise<AxiosResponse> {
    return await axios.get(`${data.api.petstoreSwaggerBaseUrl}/pet/findByStatus?status=${status}`);
  }

  static async addPet(petData: any): Promise<AxiosResponse> {
    return await axios.post(`${data.api.petstoreSwaggerBaseUrl}/pet`, petData, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  static async updatePet(petData: any): Promise<AxiosResponse> {
    return await axios.put(`${data.api.petstoreSwaggerBaseUrl}/pet`, petData, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  static async deletePet(petId: number): Promise<AxiosResponse> {
    return await axios.delete(`${data.api.petstoreSwaggerBaseUrl}/pet/${petId}`, {
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
