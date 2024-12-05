import { useMutation } from '@tanstack/react-query';

import { logout } from '../../../api/logout';

export const useLogout = () => {
  const { isError, data, error, isSuccess, mutateAsync } = useMutation({
    mutationFn: logout,
  });
  return {
    isError,
    data,
    error,
    isSuccess,
    mutateAsync,
  };
};
