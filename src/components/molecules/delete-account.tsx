import { DeleteOutlined } from '@ant-design/icons';
import { Button } from 'antd';

export const DeleteAccount = () => {
  return (
    <div>
      <span>
        <h1 className="text-4xl my-3 text-red-600 hover:text-red-800 tranisition duration-200 ease-in-out">
          Danger Zone
        </h1>
      </span>
      <Button color="danger" type="text" className="border-red-500">
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
