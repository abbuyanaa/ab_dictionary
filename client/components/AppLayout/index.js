import React from 'react';

// const localeLinks = [
//   {
//     id: 1,
//     lang: '한국어',
//     icon: '/images/flags/kr.png',
//     locale: 'ko-KR',
//   },
//   {
//     id: 2,
//     lang: 'English',
//     icon: '/images/flags/us.png',
//     locale: 'en-US',
//   },
// ];

const Layout = ({ error, children }) => {
  // useMemo(() => {
  //   const requestInterceptor = axiosAPI.interceptors.request.use((conf) => {
  //     dispatch(loadingInProgress({
  //       isLoading: true,
  //       title: t('app-layout.axios-title'),
  //       message: t('app-layout.axios-message'),
  //     }));
  //     return conf;
  //   }, (err) => {
  //     // console.error(err);
  //     dispatch(loadingInProgress({
  //       isLoading: false,
  //     }));
  //     dispatch(showToast({
  //       visible: true,
  //       message: t('error-network'),
  //       type: 'error',
  //     }));
  //     return Promise.reject(err);
  //   });

  //   const responseInterceptor = axiosAPI.interceptors.response.use((conf) => {
  //     dispatch(loadingInProgress({
  //       isLoading: false,
  //     }));
  //     return conf;
  //   }, (err) => {
  //     // console.error(err);
  //     dispatch(loadingInProgress({
  //       isLoading: false,
  //     }));
  //     dispatch(showToast({
  //       visible: true,
  //       message: t('error-network'),
  //       type: 'error',
  //     }));
  //     return Promise.reject(err);
  //   });
  //   return () => {
  //     axiosAPI.interceptors.request.eject(requestInterceptor);
  //     axiosAPI.interceptors.response.eject(responseInterceptor);
  //   };
  // }, [t]);

  // useEffect(() => {
  //   const checkScroll = () => {
  //     if (window.scrollY === 0) setToolbarClass(['main-toolbar']);
  //     else setToolbarClass(['main-toolbar', 'moved']);
  //   };
  //   window.addEventListener('scroll', checkScroll);
  //   return () => window.removeEventListener('scroll', checkScroll);
  // }, []);

  return (
    <>{children}</>
  );
};

export default Layout;
