import { useMutation } from '@tanstack/react-query';

import { changeEmailApi } from '../../../api/users/change-email';

export const useChangeEmail = () => {
  const { isError, data, error, isSuccess, mutateAsync, isPending } =
    useMutation({
      mutationFn: changeEmailApi,
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
