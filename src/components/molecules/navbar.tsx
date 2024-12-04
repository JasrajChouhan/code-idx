import { Logo } from '../atoms/logo';
import { MenuIcon } from '../atoms/menu-icon';
import { NavbarLinks } from '../atoms/navbar-links';
import { AvatarModal } from '../containers/avatar-modal';

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-light-bg dark:bg-dark-bg border-b border-gray-200 dark:border-gray-700 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center py-2">
        <Logo />
        <NavbarLinks />
        <AvatarModal />
        <MenuIcon />
      </div>
    </nav>
  );
};
