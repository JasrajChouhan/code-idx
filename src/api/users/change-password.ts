import ErrorBoundary from 'antd/es/alert/ErrorBoundary';
import { z } from 'zod';

import { axiosInstance } from '../../config/axios-instance';
import { ChangePasswordFormSchame } from '../../schemas';

export const changeEmailApi = async (
  data: z.infer<typeof ChangePasswordFormSchame>,
) => {
  try {
    const response = await axiosInstance.post(
      '/api/v1/users/change/password',
      data,
      { withCredentials: true },
    );
    console.log(`Change password api response : ${response.data}`);
    return response.data;
  } catch (error) {
    throw new ErrorBoundary(error as Error);
  }
};
