import React from 'react';
import { z } from 'zod';
import { Button, Form, Input, notification } from 'antd';

import CardWrapper from '../molecules/card-wrapper';
import { RegisterSchema } from '../../schemas';
import { useSignup } from '../../hooks/api/mutaion/useSignup';

export const RegisterForm = () => {
  type LoginType = z.infer<typeof RegisterSchema>;
  const [loading, setLoading] = React.useState<boolean>(false);
  const { mutateAsync: submitData, data } = useSignup();

  const handleSignUp = async (userLoginData: LoginType) => {
    setLoading(true);
    try {
      await submitData(userLoginData);
      notification.success({
        message: 'Registration Successful',
        description: 'You have successfully Sign up!',
      });
      console.log(data);
    } catch (error: any) {
      notification.error({
        message: 'Registration Failed',
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
        <Button type="primary" htmlType="submit" block loading={loading}>
          Sign Up
        </Button>
      </Form>
    </CardWrapper>
  );
};
