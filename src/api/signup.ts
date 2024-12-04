import { z } from 'zod';
import { axiosInstance } from '../config/axios-instance';
import { LoginSchema } from '../schemas';

export const signup = async (formData: z.infer<typeof LoginSchema>) => {
  try {
    const response = await axiosInstance.post(
      '/api/v1/users/signup',
      formData,
      { withCredentials: true },
    );
    return response.data;
  } catch (error) {
    throw new Error(error as string);
  }
};
