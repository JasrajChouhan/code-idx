import { Button, notification } from 'antd';
import React from 'react';

import { useLogout } from '../../hooks/api/mutaion/useLogout';
import { useAuthStore } from '../../store/user.store';

export const LogoutButton = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const { data, mutateAsync: logout } = useLogout();

  const handleLogout = async () => {
    setLoading(true);
    try {
      const refreshTokenValid = document.cookie.includes('refreshToken');
      console.log(refreshTokenValid);
      if (!refreshTokenValid) {
        useAuthStore.getState().logout();
      }
      await logout();
      notification.success({
        message: 'Logout Successful',
        description: 'You have successfully Log out!',
      });
      console.log(data);
    } catch (error: any) {
      const errorData = error?.props?.response?.data;
      notification.error({
        message: 'Logout Failed',
        description:
          errorData?.message || 'Something went wrong. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <Button variant="solid" onClick={() => handleLogout()} loading={loading}>
      Log out
    </Button>
  );
};
