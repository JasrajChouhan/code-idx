import { useMutation } from '@tanstack/react-query';

import { changePasswordApi } from '../../../api/users/change-password';

export const useChangePassword = () => {
  const { isError, data, error, isSuccess, mutateAsync, isPending } =
    useMutation({
      mutationFn: changePasswordApi,
    });
  return {
    isError,
    data,
    error,
    isSuccess,
    mutateAsync,
    isPending,
  };
};
