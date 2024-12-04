import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Avatar as AvatarIcon } from 'antd';

export const Avatar: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <AvatarIcon
      size={40}
      icon={<UserOutlined />}
      className="cursor-pointer"
      onClick={onClick}
    />
  );
};
