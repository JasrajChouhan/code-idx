import { Menu } from 'antd';
import { Link } from 'react-router';

export interface SidebarItemProps {
  label: string;
  icon?: React.ReactNode;
  path: string;
}

export const SidebarItem = ({ label, icon, path }: SidebarItemProps) => {
  const menuItemStyle = {
    color: 'black',
    margin: '5px 0px 5px 5px',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    cursurPointer: true,
  };
  return (
    <Menu.Item icon={icon} style={menuItemStyle}>
      <Link
        to={path}
        style={{ textDecoration: 'none', color: 'inherit', marginLeft: '5px' }}
      >
        {label}
      </Link>
    </Menu.Item>
  );
};
