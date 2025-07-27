import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Scrollspy from 'react-scrollspy';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-teal shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-teal-600">Nandini</h1>

        {/* Desktop Menu with Scrollspy */}
        <Scrollspy
          items={['home', 'about', 'projects', 'contact']}
          currentClassName="text-teal-600 font-semibold border-b-2 border-teal-500"
          componentTag="ul"
          className="hidden md:flex space-x-6"
          offset={-100}
        >
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={closeMenu}
                className="hover:text-teal-500 font-medium transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </Scrollspy>

        {/* Mobile Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center bg-white shadow-md pb-4 space-y-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={closeMenu}
                className="block text-gray-700 hover:text-teal-500 font-medium"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
