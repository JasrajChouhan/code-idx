import { Button, Flex, notification } from 'antd';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

import { authenticationByGoogle } from '../../api/authenticationByGoogle';

export const Social = () => {
  const onClick = async (provider: 'google' | 'github') => {
    try {
      if (provider === 'google') {
        const response = await authenticationByGoogle();
        notification.success({
          message: 'Authentication Successful',
          description: `Welcome, ${response?.data?.user?.username || 'User'}!`,
        });
        console.log('Google User Data:', response.data.user);
      } else {
        notification.info({
          message: 'GitHub Authentication',
          description: 'GitHub authentication is not yet implemented.',
        });
      }
    } catch (error: any) {
      console.error('Authentication Error:', error);
      notification.error({
        message: 'Authentication Failed',
        description: error.message || 'Something went wrong. Please try again.',
      });
    }
  };
  return (
    <Flex justify="center" align="center" gap={10}>
      <Button
        variant={'outlined'}
        onClick={() => onClick('google')}
        size="large"
        className="w-full"
      >
        <FcGoogle className="h-5 w-5" />
      </Button>
      <Button
        variant={'outlined'}
        onClick={() => onClick('github')}
        size="large"
        className="w-full"
      >
        <FaGithub className="h-5 w-5" />
      </Button>
    </Flex>
  );
};
