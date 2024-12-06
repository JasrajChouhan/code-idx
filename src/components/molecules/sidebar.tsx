import { Menu } from 'antd';
import { menuItems } from '../../router/menu-items';
import { SidebarItem } from '../atoms/sidebar-item';

export const Sidebar = ({ onClose }: { onClose: () => void }) => {
  return (
    <Menu style={{ height: '100%' }}>
      {menuItems.map((item) => (
        <SidebarItem key={item.path} {...item} onClose={onClose} />
      ))}
    </Menu>
  );
};
