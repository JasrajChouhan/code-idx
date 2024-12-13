import { Button, Form, Input, notification } from 'antd';
import { z } from 'zod';
import { useChangePassword } from '../../hooks/api/mutaion/useChangePassword';
import { ChangePasswordFormSchame } from '../../schemas';

export const ChangePassword = ({ onClose }: { onClose: () => void }) => {
  const { mutateAsync: changeUserPassword, isPending } = useChangePassword();
  const handlePasswordUpdate = async (
    data: z.infer<typeof ChangePasswordFormSchame>,
  ) => {
    try {
      await changeUserPassword(data);
      notification.success({
        message: 'Password Update Successful',
        description: 'You have successfully updated your password!',
      });
      onClose();
    } catch (error: any) {
      const errorData = error?.props?.response?.data;
      console.log(error);

      notification.error({
        message: 'Password Update Failed',
        description:
          errorData?.message || 'Something went wrong. Please try again.',
      });
    }
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
        rules={[
          { required: true, message: 'Please input your new password!' },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('newPassword') === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error('The two passwords do not match!'),
              );
            },
          }),
        ]}
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
      <Button type="primary" htmlType="submit" block loading={isPending}>
        Sign In
      </Button>
    </Form>
  );
};
