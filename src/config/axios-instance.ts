import axios from 'axios';
import { getEnv } from './getEnv';

export const axiosInstance = axios.create({
  baseURL:
    getEnv('VITE_NODE_ENV', 'production') === 'production'
      ? getEnv('VITE_BACKEND_URL')
      : 'http://localhost:3000',
});
