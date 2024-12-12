import { useMutation } from '@tanstack/react-query';

import { uploadAvatar } from '../../../api/users/upload-user-avatar';

export const useUploadAvatar = () => {
  const { isError, data, error, isSuccess, mutateAsync, isPending } =
    useMutation({
      mutationFn: uploadAvatar,
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
