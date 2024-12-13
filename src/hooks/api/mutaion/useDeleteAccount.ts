import { useMutation } from '@tanstack/react-query';

import { deleteUserAccountApi } from '../../../api/users/delete-account';

export const useDeleteAccount = () => {
  const { isError, data, error, isSuccess, mutateAsync, isPending } =
    useMutation({
      mutationFn: deleteUserAccountApi,
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
