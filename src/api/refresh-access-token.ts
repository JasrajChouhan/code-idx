import ErrorBoundary from 'antd/es/alert/ErrorBoundary';
import { axiosInstance } from '../config/axios-instance';

export const refreshAccessToken = async () => {
  try {
    const response = await axiosInstance.post('api/v1/refresh/access-token');
    console.log(response);
    return response.data;
  } catch (error) {
    throw new ErrorBoundary(error as Error);
  }
};
