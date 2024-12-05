import React from 'react';
import { Button, notification } from 'antd';

import { useLogout } from '../../hooks/api/mutaion/useLogout';

export const LogoutButton = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const { data, mutateAsync: logout } = useLogout();

  const handleLogout = async () => {
    setLoading(true);
    try {
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
