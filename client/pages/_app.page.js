import React from 'react';

/* base & common */
import '../css/common.css';
import '../css/index.css';

const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
};

export default App;
