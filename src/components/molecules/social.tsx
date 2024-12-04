import { Button, Flex } from 'antd';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

export const Social = () => {
  const onClick = (provider: 'google' | 'github') => {
    console.log('hello');
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
