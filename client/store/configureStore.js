import { createWrapper } from 'next-redux-wrapper';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const loggerMiddleware = ({ dispatch, getState }) => (next) => (action) => {
  console.log('dispatch:', dispatch);
  console.log('state:', getState);
  console.log('action', action);
  if (typeof action === 'function') {
    return action(dispatch, getState);
  }
  return next(action);
};

const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  console.log('SagaMiddlware:', sagaMiddleware);
  const middlewares = [sagaMiddleware];
  if (process.env.NODE_ENV !== 'production') middlewares.push(loggerMiddleware);
  const store = configureStore({
    reducer: rootReducer,
    middleware: () => middlewares,
    devTools: process.env.NODE_ENV !== 'production',
  });
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

const wrapper = createWrapper(makeStore, { debug: process.env.NODE_ENV !== 'production' });

export default wrapper;

// const sagaMiddleware = createSagaMiddleware();
// const middlewares = [sagaMiddleware];
// console.log(middlewares);
// if (process.env.NODE_ENV !== 'production') middlewares.push(loggerMiddleware);
// console.log(middlewares);
// const store = configureStore({
//   reducer: rootReducer,
//   middleware: () => middlewares,
//   devTools: process.env.NODE_ENV !== 'production',
// });
// sagaMiddleware.run(rootSaga);

// export default store;
