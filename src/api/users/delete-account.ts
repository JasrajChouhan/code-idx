import ErrorBoundary from 'antd/es/alert/ErrorBoundary';

import { axiosInstance } from '../../config/axios-instance';
import { useAuthStore } from '../../store/user.store';

export const deleteUserAccountApi = async () => {
  try {
    const response = await axiosInstance.delete(
      '/api/v1/users/delete/user/account',
      { withCredentials: true },
    );
    console.log(`Account delete api response : ${response.data}`);

    // set user null or remove in zustand store
    const { logout } = useAuthStore.getState();
    logout();
    return response.data;
  } catch (error) {
    throw new ErrorBoundary(error as Error);
  }
};
