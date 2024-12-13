import { Button, Form, Input, notification } from 'antd';
import { z } from 'zod';
import { useChangeEmail } from '../../hooks/api/mutaion/useChangeEmail';
import { ChangeEmailFormSchema } from '../../schemas';

export const ChangeEmail = ({ onClose }: { onClose: () => void }) => {
  const { mutateAsync: changeUserEmail, isPending } = useChangeEmail();
  const handleEmailUpdate = async (
    data: z.infer<typeof ChangeEmailFormSchema>,
  ) => {
    try {
      await changeUserEmail(data);
      notification.success({
        message: 'Email Update Successful',
        description: 'You have successfully update email!',
      });
      onClose();
    } catch (error: any) {
      const errorData = error?.props?.response?.data;
      console.log(error);

      notification.error({
        message: 'Email Update Failed',
        description:
          errorData?.message || 'Something went wrong. Please try again.',
      });
    }
  };
  return (
    <Form layout="vertical" onFinish={handleEmailUpdate}>
      <Form.Item
        label="Old Email"
        name="oldEmail"
        rules={[{ required: true, message: 'Please input your old email!' }]}
      >
        <Input type="email" placeholder="Enter your email" />
      </Form.Item>
      <Form.Item
        label="New Email"
        name="newEmail"
        rules={[{ required: true, message: 'Please input your new email!' }]}
      >
        <Input type="email" placeholder="Enter your email" />
      </Form.Item>
      <Button type="primary" htmlType="submit" block loading={isPending}>
        Sign In
      </Button>
    </Form>
  );
};
