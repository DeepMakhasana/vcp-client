const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-gray-300 py-4 text-center text-sm">
      © {year} Deep Makhasana. All rights reserved.
    </footer>
  );
};

export default Footer;
