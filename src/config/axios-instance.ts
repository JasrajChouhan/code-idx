import axios from 'axios';
import { useAuthStore } from '../store/user.store';
import { getEnv } from './getEnv';

export const axiosInstance = axios.create({
  baseURL:
    getEnv('VITE_NODE_ENV', 'production') === 'production'
      ? getEnv('VITE_BACKEND_URL')
      : 'http://localhost:3000',
});

axiosInstance.interceptors.response.use(
  (response) => response, // Forward successful responses
  async (error) => {
    const originalRequest = error.config;

    // If access token is expired, try refreshing the token
    if (
      error.response?.status === 401 &&
      originalRequest &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true; // Avoid infinite loops

      try {
        const refreshResponse = await axiosInstance.post(
          '/api/v1/refresh/access-token',
          {},
          { withCredentials: true },
        );

        console.log(refreshResponse);

        const newAccessToken = refreshResponse.data?.accessToken;
        if (newAccessToken) {
          // Set new token in auth store
          const { setAccessToken } = useAuthStore.getState();
          setAccessToken(newAccessToken);

          // Retry the original request with the new token
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return axiosInstance(originalRequest);
        }
      } catch (refreshError) {
        console.error('Failed to refresh token:', refreshError);

        // Logout the user if token refresh fails
        const { logout } = useAuthStore.getState();
        logout();
        window.location.href = '/';
      }
    }
    return Promise.reject(error);
  },
);
