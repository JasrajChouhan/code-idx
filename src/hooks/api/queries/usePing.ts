import { useQuery } from '@tanstack/react-query';

import { pingApi } from '../../../api/ping';

export const usePing = () => {
  const { isError, isLoading, data, error } = useQuery({
    queryKey: ['ping'],
    queryFn: pingApi,
    staleTime: 3 * 60 * 1000,
  });
  return {
    isError,
    isLoading,
    data,
    error,
  };
};
