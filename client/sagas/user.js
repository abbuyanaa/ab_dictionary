import { all, call, put, takeLatest } from 'redux-saga/effects';

import { axiosAPI } from '../api';
import {
  loadUserRequest, loadUserSuccess,
  loginRequest, loginSuccess,
  logoutRequest, logoutSuccess,
} from '../reducers/user';
// import { decryptAll, encryptAll } from '../utils/crypto';

function loginAPI(data) {
  return axiosAPI.post('/user/login', data);
}
function* login(action) {
  try {
    const encryptedPayload = encryptAll(action.payload);
    const result = yield call(loginAPI, encryptedPayload);
    const decryptedData = result.data ? decryptAll(result.data) : result.data;
    yield put(loginSuccess(decryptedData));
    // const result = yield call(loginAPI, action.payload);
    // yield put(loginSuccess(result.data));
  } catch (error) {
    console.error(error);
    yield put(showPopup({
      isShowing: true,
      content: error.response?.data || '',
      redirect: '',
    }));
  }
}

function loadUserAPI() {
  return axiosAPI.get('/user');
}
function* loadUser() {
  try {
    const result = yield call(loadUserAPI);
    const decryptedData = result.data ? decryptAll(result.data) : result.data;
    yield put(loadUserSuccess(decryptedData));
    // yield put(loadUserSuccess(result.data));
  } catch (error) {
    console.error(error);
    yield put(showPopup({
      isShowing: true,
      content: error.response?.data || '',
      redirect: '',
    }));
  }
}

function logoutAPI() {
  return axiosAPI.post('/user/logout');
}
function* logout() {
  try {
    yield call(logoutAPI);
    yield put(logoutSuccess());
  } catch (error) {
    console.error(error);
    yield put(showPopup({
      isShowing: true,
      content: error.response?.data || '',
      redirect: '/',
      shouldReplace: true,
    }));
  }
}

export default function* userSaga() {
  yield all([
    takeLatest(loginRequest, login),
    takeLatest(loadUserRequest, loadUser),
    takeLatest(logoutRequest, logout),
  ]);
}
