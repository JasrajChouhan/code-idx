import { Button, Form, Input, notification } from 'antd';
import { z } from 'zod';
import { useLogin } from '../../hooks/api/mutaion/useLogin';
import { LoginSchema } from '../../schemas';
import CardWrapper from '../molecules/card-wrapper';
import React from 'react';

export const LoginForm = () => {
  type LoginType = z.infer<typeof LoginSchema>;
  const [loading, setLoading] = React.useState<boolean>(false);
  const { mutateAsync: submitData, data } = useLogin();

  const handleSignIn = async (userLoginData: LoginType) => {
    setLoading(true);
    try {
      await submitData(userLoginData);
      notification.success({
        message: 'Login Successful',
        description: 'You have successfully logged in!',
      });
      console.log(data.data);
    } catch (error: any) {
      notification.error({
        message: 'Login Failed',
        description:
          error?.message || 'Something went wrong. Please try again.',
      });
    } finally {
      setLoading(false);
    }
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
        </Form.Item>

        <div className="flex justify-end mt-[-25px] mr-[-15px] mb-4">
          <Button
            type="link"
            href="/auth/forgot-password"
            className="text-blue-500"
          >
            Forgot Password?
          </Button>
        </div>

        <Button type="primary" htmlType="submit" block loading={loading}>
          Sign In
        </Button>
      </Form>
    </CardWrapper>
  );
};
