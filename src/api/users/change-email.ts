import ErrorBoundary from 'antd/es/alert/ErrorBoundary';
import { z } from 'zod';

import { axiosInstance } from '../../config/axios-instance';
import { ChangeEmailFormSchema } from '../../schemas';
import { useAuthStore } from '../../store/user.store';

export const changeEmailApi = async (
  data: z.infer<typeof ChangeEmailFormSchema>,
) => {
  try {
    const response = await axiosInstance.post(
      '/api/v1/users/change/email',
      data,
      { withCredentials: true },
    );
    console.log(`Change email api response : ${response.data}`);

    // update the user email inside zustand store
    const uesrEmail = response.data.data.user.email as string;
    const { user, setUser } = useAuthStore.getState();

    if (user) {
      setUser({
        ...user,
        email: uesrEmail,
      });
    }

    return response.data;
  } catch (error) {
    throw new ErrorBoundary(error as Error);
  }
};
