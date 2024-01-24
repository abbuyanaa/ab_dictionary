import React from 'react';

// import { axiosAPI } from '../api';
import Layout from '../components/AppLayout';

const AppLayout = ({ Component, pageProps }) => {
  // useEffect(() => {
  //   axiosAPI.post('/log', { pathname: router.pathname });
  // }, [router.pathname, user]);

  return (
    <>
      <Layout error={pageProps.error}>
        {Component}
      </Layout>
    </>
  );
};

export default AppLayout;
