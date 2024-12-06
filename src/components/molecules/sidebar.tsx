import { Menu } from 'antd';
import React from 'react';
import { menuItems } from '../../router/menu-items';
import { SidebarItem } from '../atoms/sidebar-item';

export const Sidebar: React.FC = () => {
  return (
    <Menu style={{ height: '100%' }}>
      {menuItems.map((item) => (
        <SidebarItem key={item.path} {...item} />
      ))}
    </Menu>
  );
};
