import { Link } from 'react-router';

export const NavbarLinks: React.FC = () => {
  const links = ['/', 'About', 'Services', 'Contact'];
  return (
    <div className="hidden md:flex space-x-4 text-dark-text">
      {links.map((link, idx) => (
        <Link
          key={idx}
          to={`${link.toLowerCase()}`}
          className="hover:text-primary transition duration-300"
        >
          {link === '/' ? 'Home' : link}
        </Link>
      ))}
    </div>
  );
};
