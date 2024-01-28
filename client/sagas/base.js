import { all, call, put, takeLatest } from 'redux-saga/effects';

// import { axiosAPI } from '../api';
import {
  incRequest, incSuccess,
  decRequest, decSuccess,
} from '../reducers/base';

// function loginAPI(data) {
//   return axiosAPI.post('/user/login', data);
// }
function* countInc() {
  try {
    yield put(incSuccess());
  } catch (error) {
    console.error(error);
  }
}
function* countDec(action) {
  try {
    yield put(decSuccess());
  } catch (error) {
    console.error(error);
  }
}

export default function* userSaga() {
  yield all([
    takeLatest(incRequest, countInc),
    takeLatest(decRequest, countDec),
  ]);
}
