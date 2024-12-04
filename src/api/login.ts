import { z } from 'zod';
import { axiosInstance } from '../config/axios-instance';
import { LoginSchema } from '../schemas';

export const login = async (formData: z.infer<typeof LoginSchema>) => {
  try {
    const response = await axiosInstance.post(
      '/api/v1/users/signin',
      formData,
      { withCredentials: true },
    );
    return response.data;
  } catch (error) {
    throw new Error(error as string);
  }
};
