import React, { ReactNode } from "react";
import Navbar from "../layout/Navbar";

const Layout: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <>
      <div className="hidden md:flex flex-col min-h-screen min-w-6xl h-full leading-normal overflow-x-hidden">
        <Navbar />
        <main className="flex-1 flex flex-col px-5">{children}</main>
      </div>
      <div className="flex md:hidden flex-col min-h-screen h-full">
        <div className="m-auto text-center text-xl">
          <div>(╯°□°)╯︵ ┻━┻</div>
          <div className="mt-2">Desktop only</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
