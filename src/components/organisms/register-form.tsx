import { Button, Form, Input } from 'antd';
import CardWrapper from '../molecules/card-wrapper';

export const RegisterForm = () => {
  const handleSignUp = () => {
    console.log('hello sign up');
  };
  return (
    <CardWrapper
      showSocial={true}
      backButtonHref="/auth/login"
      backButtonLabel="Already have an account?"
      headerLabel="Sign Up"
    >
      <Form layout="vertical" onFinish={handleSignUp}>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input type="text" placeholder="Enter your user" />
        </Form.Item>
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
        </Form.Item>
        <Button type="primary" htmlType="submit" block>
          Sign Up
        </Button>
      </Form>
    </CardWrapper>
  );
};
