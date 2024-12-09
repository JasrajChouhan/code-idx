import ErrorBoundary from 'antd/es/alert/ErrorBoundary';
import { axiosInstance } from '../config/axios-instance';
import { z } from 'zod';
import { createProjectSchema } from '../schemas';

export const createProject = async (
  createProjectData: z.infer<typeof createProjectSchema>,
) => {
  // currently run we a particulare docker container for user

  try {
    const response = await axiosInstance.post(
      '/api/v1/projects',
      createProjectData,
      { withCredentials: true },
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new ErrorBoundary(error as Error);
  }
};
