import React from 'react';

const Navbar: React.FC = () => (
  <header className="fixed w-full top-0 z-20 flex bg-amber-200 bg-opacity-50 frosted-bg">
    <nav className="mx-auto flex items-center px-5 py-4 md:py-6 md:px-10 max-w-7xl w-full text-lg">
      <div className="flex-1">
        <a href="#">
          <img src="/logo.png" alt="logo" className="w-40 md:w-50" />
        </a>
      </div>
      <div className="flex-1 flex justify-end">
        <a
          href="#early-access"
          className="text-sm font-bold rounded-full py-2 px-5 bg-amber-300 transition ease-in-out duration-300 hover:bg-amber-400"
        >
          Get the Drop
        </a>
      </div>
    </nav>
  </header>
);

export default Navbar;
