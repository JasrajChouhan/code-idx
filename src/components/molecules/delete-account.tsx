import { DeleteOutlined } from '@ant-design/icons';
import { Button, notification } from 'antd';
import { useDeleteAccount } from '../../hooks/api/mutaion/useDeleteAccount';
import { useNavigate } from 'react-router';

export const DeleteAccount = () => {
  const navigate = useNavigate();
  const { mutateAsync: deleteAccount, isPending } = useDeleteAccount();
  const deleteAccountHandler = async () => {
    try {
      await deleteAccount();
      notification.success({
        message: 'Account Delete Successful',
        description: 'You have successfully delete account!',
      });
      navigate('/');
    } catch (error: any) {
      const errorData = error?.props?.response?.data;
      console.log(error);

      notification.error({
        message: 'Account Delete Failed',
        description:
          errorData?.message || 'Something went wrong. Please try again.',
      });
    }
  };
  return (
    <div>
      <span>
        <h1 className="text-4xl my-3 text-red-600 hover:text-red-800 tranisition duration-200 ease-in-out">
          Danger Zone
        </h1>
      </span>
      <Button
        color="danger"
        type="text"
        className="border-red-500"
        onClick={deleteAccountHandler}
        loading={isPending}
      >
        <DeleteOutlined />
        <span color="red" className="text-red-600">
          {' '}
          Delete Account{' '}
        </span>
      </Button>
      <div className="mt-3 text-sm text-zinc-400 hover:text-zinc-500 transition ease-in-out duration-300">
        <p>This operation will delete the parmanet account.</p>
      </div>
      <p></p>
    </div>
  );
};
