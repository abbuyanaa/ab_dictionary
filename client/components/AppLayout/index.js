import React from 'react';
import NavList from './NavList';

const Layout = ({ children }) => {
  return (
    <>
      <NavList />
      {children}
    </>
  );
};

export default Layout;
