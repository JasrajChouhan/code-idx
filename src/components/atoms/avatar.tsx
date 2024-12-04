import { UserOutlined } from '@ant-design/icons';
import { Avatar as AvatarIcon } from 'antd';

export const Avatar: React.FC = () => {
  return (
    <div>
      <AvatarIcon
        size={40}
        icon={<UserOutlined />}
        className="cursor-pointer"
      />
    </div>
  );
};
