import axios, { AxiosInstance } from 'axios';
import { validateStatusCode } from './utils';

const instance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  validateStatus: validateStatusCode,
});

export default instance;
