import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import NavList from '@/components/AppLayout/NavList';

// const localeLinks = [
//   {
//     id: 1,
//     lang: 'English',
//     icon: '/images/flags/us.png',
//     locale: 'en-US',
//   },
//   {
//     id: 2,
//     lang: '한국어',
//     icon: '/images/flags/kr.png',
//     locale: 'ko-KR',
//   },
// ];

const Layout = ({ children }) => {
  // const router = useRouter();

  // const selectedItem = useMemo(() => localeLinks
  //   .find((v) => v.locale === router.locale) || localeLinks[0], [router.locale]);

  return (
    <>
      <NavList />
      {children}
    </>
  );
};

export default Layout;
