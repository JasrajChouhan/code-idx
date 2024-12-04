import { useMutation } from '@tanstack/react-query';

import { signup } from '../../../api/signup';

export const useSignup = () => {
  const { isError, data, error, isSuccess, mutateAsync } = useMutation({
    mutationFn: signup,
  });
  return {
    isError,
    data,
    error,
    isSuccess,
    mutateAsync,
  };
};
