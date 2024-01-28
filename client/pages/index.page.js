import React, { useCallback } from 'react';
import { END } from 'redux-saga';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import { decRequest, incRequest } from '@/reducers/base';

import { axiosAPI } from '@/api';
import wrapper from '@/store/configureStore';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const index = () => {
  // const dispatch = useDispatch();
  // const count = useSelector((state) => state.base.count);
  // const onBtnClick = useCallback((op) => {
  //   if (op === '+') {
  //     dispatch(incRequest());
  //   } else {
  //     dispatch(decRequest());
  //   }
  // }, []);
  return (
    <>
      <Head>
        <title>AB Dictionary | HOME</title>
      </Head>
      <div>Create Blog</div>
      {/* <button onClick={() => onBtnClick('+')}>Inc</button>
      <button onClick={() => onBtnClick('-')}>Dec</button> */}
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
  const cookie = context.req?.headers.cookie || '';
  if (cookie) axiosAPI.defaults.headers.Cookie = cookie;
  const locale = context.locale || 'en-US';
  axiosAPI.defaults.headers.common['Accept-Language'] = locale;
  store.dispatch(END);
  await store.sagaTask.toPromise();
  axiosAPI.defaults.headers.Cookie = '';
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
});

export default index;
