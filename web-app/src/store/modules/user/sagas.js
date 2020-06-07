import { all, put, call, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { getMeSuccess, getMeFail } from './actions';
import { signOut } from '../auth/actions';

import api from '../../../services/api';

import bucket from '../../index';

export function* getMe() {
  try {
    const signed = bucket.store.getState().auth.signed;

    if (!signed) {
      return yield put(signOut());
    }

    const response = yield call(api.get, '/me');

    const me = response.data;

    yield put(getMeSuccess(me));
  } catch (error) {
    toast.error('Ocorreu algum erro, tente novamente mais tarde.');

    yield put(signOut());
  }
}

export function* updateMe({ payload }) {
  try {
    const response = yield call(api.put, '/me', payload);

    const me = response.data;

    toast.success('Perfil alterado com sucesso.');
    yield put(getMeSuccess(me));
  } catch (error) {
    toast.error('Ocorreu algum erro, tente novamente mais tarde.');

    yield put(getMeFail());
  }
}

export default all([
  takeLatest('@user/GET_ME_REQUEST', getMe),
  takeLatest('persist/REHYDRATE', getMe),
  takeLatest('@user/UPDATE_ME_REQUEST', updateMe),
]);
