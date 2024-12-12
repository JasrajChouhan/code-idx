import ErrorBoundary from 'antd/es/alert/ErrorBoundary';
import { axiosInstance } from '../../config/axios-instance';
import { useAuthStore } from '../../store/user.store';

export const uploadAvatar = async (formData: FormData) => {
  try {
    const response = await axiosInstance.post(
      '/api/v1/users/upload/avatar',
      formData,
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );

    console.log(response.data);
    const avatar = response.data?.data?.avatar as string;
    // update user zustand store
    const { user, setUser } = useAuthStore.getState();

    if (user) {
      setUser({
        ...user,
        avatar,
      });
    }
    return response.data;
  } catch (error) {
    throw new ErrorBoundary(error as Error);
  }
};
