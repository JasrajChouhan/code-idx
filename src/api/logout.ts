import ErrorBoundary from 'antd/es/alert/ErrorBoundary';
import { axiosInstance } from '../config/axios-instance';
import { useAuthStore } from '../store';

export const logout = async () => {
  try {
    const response = await axiosInstance.post(
      '/api/v1/users/logout',
      {},
      { withCredentials: true },
    );
    console.log(response);
    useAuthStore.getState().logout();
    return response.data;
  } catch (error) {
    throw new ErrorBoundary(error as Error);
  }
};
