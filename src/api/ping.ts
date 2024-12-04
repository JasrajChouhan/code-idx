import { axiosInstance } from '../config/axios-instance';

export const pingApi = async () => {
  try {
    const response = await axiosInstance.get('/api/v1/ping');
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(error as string);
  }
};
