import { z } from 'zod';
import { Button, Form, Input } from 'antd';
import { ChangePasswordFormSchame } from '../../schemas';

export const ChangePassword = () => {
  const handlePasswordUpdate = (
    data: z.infer<typeof ChangePasswordFormSchame>,
  ) => {
    alert(data);
  };
  return (
    <Form layout="vertical" onFinish={handlePasswordUpdate}>
      <Form.Item
        label="Old Password"
        name="oldPassword"
        rules={[{ required: true, message: 'Please input your old password!' }]}
      >
        <Input.Password type="password" placeholder="Enter your old password" />
      </Form.Item>
      <Form.Item
        label="New Password ( Ex. johnDOE454!@$)"
        name="newPassword"
        rules={[{ required: true, message: 'Please input your new password!' }]}
      >
        <Input.Password type="password" placeholder="Enter your new password" />
      </Form.Item>

      <Form.Item
        label="Confirm Password"
        name="confirmPassword"
        rules={[
          { required: true, message: 'Please confirm your new password!' },
        ]}
      >
        <Input.Password
          type="password"
          placeholder="Please confirm your new password"
        />
      </Form.Item>
      <Button type="primary" htmlType="submit" block>
        Sign In
      </Button>
    </Form>
  );
};
