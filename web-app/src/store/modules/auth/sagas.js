import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import history from '../../../services/history';

import { signInSucess, signFailure, signUpSuccess } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, '/me', {
      email,
      password,
    });

    const { token, me } = response.data;

    yield put(signInSucess(token, me));
  } catch (error) {
    toast.error('Erro na autenticacao ,verifique seus dados.');

    yield put(signFailure());
  }
}

export function* signUp({ payload, navigation }) {
  try {
    yield call(api.post, '/user', payload);

    toast.success('Sucesso,Conta criada com sucesso.');

    yield put(signUpSuccess());
  } catch (error) {
    toast.success('Erro, Ja existe uma conta com esse email.');

    yield put(signFailure());
  }
}

export function setTokenRefresh({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOUt() {
  history.push('/');
}

export function loginSuccess() {
  history.push('/home');
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('persist/REHYDRATE', setTokenRefresh),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOUt),
  takeLatest('@auth/SIGN_IN_SUCCESS', loginSuccess),
]);
