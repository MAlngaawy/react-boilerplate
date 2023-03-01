import React from "react";

export const Layout = ({ children }) => {
  return (
    <>
      <nav>This is Navbar</nav>
      <div>{children}</div>
    </>
  );
};

export default Layout;
