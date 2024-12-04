import { useMutation } from '@tanstack/react-query';

import { login } from '../../../api/login';

export const useLogin = () => {
  const { isError, data, error, isSuccess, mutateAsync } = useMutation({
    mutationFn: login,
  });
  return {
    isError,
    data,
    error,
    isSuccess,
    mutateAsync,
  };
};
