import { z } from 'zod';
import { Button, Form, Input } from 'antd';
import { ChangeEmailFormSchema } from '../../schemas';

export const ChangeEmail = () => {
  const handleEmailUpdate = (data: z.infer<typeof ChangeEmailFormSchema>) => {
    alert(data);
  };
  return (
    <Form layout="vertical" onFinish={handleEmailUpdate}>
      <Form.Item
        label="Old Email"
        name="email"
        rules={[{ required: true, message: 'Please input your old email!' }]}
      >
        <Input type="email" placeholder="Enter your email" />
      </Form.Item>
      <Form.Item
        label="New Email"
        name="email"
        rules={[{ required: true, message: 'Please input your new email!' }]}
      >
        <Input type="email" placeholder="Enter your email" />
      </Form.Item>
      <Button type="primary" htmlType="submit" block>
        Sign In
      </Button>
    </Form>
  );
};
