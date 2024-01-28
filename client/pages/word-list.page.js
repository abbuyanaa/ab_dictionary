import React from 'react';
import Head from 'next/head';

import { axiosAPI } from '../api';
import wrapper from '../store/configureStore';

const wordList = () => {
  return (
    <>
      <Head>
        <title>Word List</title>
      </Head>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
  const cookie = context.req?.headers.cookie || '';
  if (cookie) axiosAPI.defaults.headers.Cookie = cookie;
  const locale = context.locale || 'ko-KR';
  axiosAPI.defaults.headers.common['Accept-Language'] = locale;
  // store.dispatch(loadUserRequest());
  store.dispatch(END);
  await store.sagaTask.toPromise();
  axiosAPI.defaults.headers.Cookie = '';
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'index'])),
    },
  };
});

export default wordList;
