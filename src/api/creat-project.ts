import ErrorBoundary from 'antd/es/alert/ErrorBoundary';
import { axiosInstance } from '../config/axios-instance';

export const createProject = async () => {
  // we only focus on create react project on server
  // But in future we change

  try {
    const response = await axiosInstance.post(
      '/api/v1/projects',
      {},
      { withCredentials: true },
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new ErrorBoundary(error as Error);
  }
};
