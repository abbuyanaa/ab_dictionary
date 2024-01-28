import React from 'react';
import Router, { useRouter } from 'next/router';
import menus from '@/menu';

const NavList = () => {
  const router = useRouter();
  console.log(menus);
  console.log(router);

  return (
    <div style={{ width: '100%' }}>
      {menus['en-US'].map((v) => (
        <button
          key={v.menuID}
          style={{ padding: '5px 15px' }}
          onClick={() => Router.replace(v.addr)}
        >{v.mainName}</button>
      ))}
      <button>Test</button>
    </div>
  );
};

export default NavList;
