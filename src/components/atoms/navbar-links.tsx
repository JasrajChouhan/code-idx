export const NavbarLinks: React.FC = () => {
  const links = ['Home', 'About', 'Services', 'Contact'];
  return (
    <div className="hidden md:flex space-x-4 text-dark-text">
      {links.map((link, idx) => (
        <a
          key={idx}
          href={`#${link.toLowerCase()}`}
          className="hover:text-primary transition duration-300"
        >
          {link}
        </a>
      ))}
    </div>
  );
};
