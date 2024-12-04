import { Button, Form, Input } from 'antd';
import CardWrapper from '../molecules/card-wrapper';

export const LoginForm = () => {
  const handleSignIn = (values: any) => {
    console.log('Sign Up Data:', values);
  };
  return (
    <CardWrapper
      showSocial={true}
      backButtonHref="/auth/register"
      backButtonLabel="Don't have an account?"
      headerLabel="Sign In"
    >
      <Form layout="vertical" onFinish={handleSignIn}>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input type="email" placeholder="Enter your email" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder="Enter your password" />

          <Button type='link' href='/auth/forget/password' className='ml-[-15px]'>
            Forget password</Button>
        </Form.Item>


        <Button type="primary" htmlType="submit" block>
          Sign In
        </Button>
      </Form>
    </CardWrapper>
  );
};
