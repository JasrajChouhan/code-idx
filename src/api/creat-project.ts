import ErrorBoundary from 'antd/es/alert/ErrorBoundary';
import { axiosInstance } from '../config/axios-instance';
import { z } from 'zod';
import { createProjectSchema } from '../schemas';
import { useProjectStore } from '../store/project.store';

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
    console.log(response.data.data);
    const { data: projectData } = response.data;

    // Add the project to zustand store (project.store.ts)
    const { addProject } = useProjectStore.getState();
    addProject({
      projectName: projectData?.projectName,
      createdAt: projectData?.createdAt,
      projectTechStack: projectData?.projectTechStack,
      _id: projectData?._id,
      authorId: projectData.author,
      isActive: projectData.isActive,
      updatedAt: projectData.updatedAt,
      description: projectData.description,
    });
    return response.data;
  } catch (error) {
    throw new ErrorBoundary(error as Error);
  }
};
