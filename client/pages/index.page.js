import React from 'react';
import { END } from 'redux-saga';
import Head from 'next/head';

// import { axiosAPI } from '../api';
import wrapper from '../store/configureStore';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const index = () => {
  return (
    <>
      <Head>
        <title>AB Dictionary | HOME</title>
      </Head>
      <div>Create Blog</div>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
  const cookie = context.req?.headers.cookie || '';
  if (cookie) axiosAPI.defaults.headers.Cookie = cookie;
  const locale = context.locale || 'ko-KR';
  // axiosAPI.defaults.headers.common['Accept-Language'] = locale;
  store.dispatch(END);
  await store.sagaTask.toPromise();
  // axiosAPI.defaults.headers.Cookie = '';
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
});

export default index;
