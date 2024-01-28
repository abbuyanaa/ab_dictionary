import React from 'react';
import Router from 'next/router';
import menus from '../../menu';

const NavList = () => {
  return (
    <div style={{ width: '100%' }}>
      {menus['en-US'].map((v) => (
        <button
          key={v.menuID}
          style={{ padding: '5px 15px' }}
          onClick={() => Router.replace(v.addr)}
        >{v.mainName}</button>
      ))}
    </div>
  );
};

export default NavList;
