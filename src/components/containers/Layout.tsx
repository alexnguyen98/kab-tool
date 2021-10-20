import React from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="min-h-screen h-full leading-normal overflow-x-hidden">
      <Navbar />
      <main className="flex flex-col">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
