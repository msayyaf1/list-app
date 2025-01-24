import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { mockData } from '@/utils/mockData';

// Create axios instance
export const api = axios.create({
  baseURL: '/api',
  timeout: 5000,
});

// Creating a mock instance
const mock = new MockAdapter(api, { delayResponse: 500 });

// Mock GET request for gift cards
mock.onGet('/gift-cards').reply(200, {
  status: 'success',
  data: mockData,
});