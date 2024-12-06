import {
  AppstoreOutlined,
  FileOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';

export const menuItems = [
  { label: 'Recent', icon: <AppstoreOutlined />, path: '/dashboard/recent' },
  {
    label: 'Settings',
    icon: <SettingOutlined />,
    path: '/dashboard/settings',
  },
  {
    label: 'Invite Members',
    icon: <UserOutlined />,
    path: '/dashboard/invite',
  },
  { label: 'Usage', icon: <FileOutlined />, path: '/dashboard/usage' },
];
