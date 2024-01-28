import React, { useRef } from 'react';
import Layout from '@/components/AppLayout';

const AppLayout = ({ Component, pageProps }) => {
  const authRefs = useRef([]);

  return (
    <>
      <Layout authRefs={authRefs} error={pageProps?.error}>
        <Component authRefs={authRefs} {...pageProps} />
      </Layout>
    </>
  );
};

export default AppLayout;
