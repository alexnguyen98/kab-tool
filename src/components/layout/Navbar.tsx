import React from 'react';
import dynamic from 'next/dynamic';
import Logo from '../icons/Logo';
import Github from '../icons/Github';

const ThemeToggle = dynamic(() => import('../utils/ThemeToggle'), {
  ssr: false,
});

const Navbar: React.FC = () => {
  return (
    <header>
      <nav className="px-5 py-3 flex items-center">
        <div className="flex items-center text-blue-700">
          <Logo className="w-8 mr-1" />
          KAB tool
        </div>
        <ul className="ml-auto text-sm text-accent-3 flex items-center space-x-5">
          <li>
            <ThemeToggle />
          </li>
          <li>
            <a href="https://github.com/alexnguyen98/kab-tool" className="flex items-center">
              <Github className="w-4 mr-1 fill-current" />
              Github
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
