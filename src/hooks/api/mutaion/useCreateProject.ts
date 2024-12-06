import { useMutation } from '@tanstack/react-query';

import { createProject } from '../../../api/creat-project';

export const useCreateProject = () => {
  const { isError, data, error, isSuccess, mutateAsync } = useMutation({
    mutationFn: createProject,
  });
  return {
    isError,
    data,
    error,
    isSuccess,
    mutateAsync,
  };
};
