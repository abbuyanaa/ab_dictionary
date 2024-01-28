import React, { useCallback, useMemo, useState } from 'react';
import { appWithTranslation, useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { SWRConfig } from 'swr';
import { Provider } from 'react-redux';
import store from '@/store/configureStore';
import { locale, loadMessages } from 'devextreme/localization';
import enMessages from 'devextreme/localization/messages/en.json';

import AppLayout from '@/pages/_appLayout';
import wrapper from '@/store/configureStore';
import koMessages from '@/public/messages/ko-KR.json';
import { fetcher } from '@/utils/util';
import { customConfirm } from '@/utils/customDialogs';
import { axiosAPI } from '@/api';

/* base & common */
import '../css/common.css';
import '../css/index.css';

const App = ({ Component, pageProps }) => {
  // const { t } = useTranslation(['common']);
  const router = useRouter();

  const [isSWRConfirming, setIsSWRConfirming] = useState(false);

  // const onUseSWRErrorRetry = useCallback(async (error, key, config, revalidate, { retryCount }) => {
  //   if (!isSWRConfirming) {
  //     // 5번까지만 재시도함
  //     if (retryCount >= 5) {
  //       setIsSWRConfirming(true);
  //       const result = await customConfirm(t('error-network'), t('error-swr'));
  //       if (result) router.reload();
  //       else await router.replace('/');
  //       setIsSWRConfirming(false);
  //       return;
  //     }
  //     // 기본 refreshInterval 혹은 1분 후에 재시도
  //     setTimeout(() => revalidate({ retryCount }), config.refreshInterval || 60000);
  //   }
  // }, [t, isSWRConfirming]);

  useMemo(() => {
    /* can be similar to componentWillMount - before mount */
    switch (router.locale) {
    case 'en-US':
      loadMessages(enMessages);
      break;
    default: // ko-KR or others
      loadMessages(koMessages);
    }
    locale(router.locale);
    axiosAPI.defaults.headers.common['Accept-Language'] = router.locale;
  }, [router.locale]);

  // return (
  //   <Provider store={store}>
  //     <AppLayout Component={Component} {...pageProps} />;
  //   </Provider>
  // );

  return (
    // <SWRConfig
    //   value={{
    //     revalidateIfStale: true,
    //     revalidateOnFocus: false,
    //     revalidateOnReconnect: true,
    //     refreshInterval: 60000,
    //     fetcher: ([url, params]) => fetcher(url, params),
    //     onErrorRetry: onUseSWRErrorRetry,
    //   }}
    // >
      <AppLayout Component={Component} {...pageProps} />
    // </SWRConfig>
  );
};

// export default App;
// export default appWithTranslation(App);
// export default wrapper.useWrappedStore(App);
// export default appWithTranslation(wrapper.useWrappedStore(App));
export default appWithTranslation(wrapper.withRedux(App));
