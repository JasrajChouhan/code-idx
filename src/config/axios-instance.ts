import axios from 'axios';
import { getEnv } from './getEnv';

export const axiosInstance = axios.create({
  baseURL:
    getEnv('NODE_ENV', 'production') === 'production'
      ? getEnv('BACKEND_URL')
      : 'http://localhost:3000',
});
