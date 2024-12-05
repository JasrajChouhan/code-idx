import { z } from 'zod';
import ErrorBoundary from 'antd/es/alert/ErrorBoundary';
import { axiosInstance } from '../config/axios-instance';
import { LoginSchema } from '../schemas';
import { useAuthStore } from '../store';

export const login = async (formData: z.infer<typeof LoginSchema>) => {
  try {
    const response = await axiosInstance.post(
      '/api/v1/users/signin',
      formData,
      { withCredentials: true },
    );
    const { user: userData } = response.data.data;

    // set the user data into zustand auth store
    useAuthStore.getState().setUser({
      userId: userData._id,
      username: userData.username,
      userRole: userData.userRole,
      email: userData.email,
      avatar: userData.avatar || '',
    });
    return response.data;
  } catch (error) {
    throw new ErrorBoundary(error as Error);
  }
};
