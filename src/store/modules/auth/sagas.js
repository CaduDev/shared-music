import { takeLatest, call, put, all } from 'redux-saga/effects';

import { toast } from 'react-toastify';

import api from '../../../services/api';

import history from '../../../services/history';

import { signInSuccesss, signFailure } from './actions';

export function* signIn({ payload }) {
  const { email, password } = payload;

  if (!email && !password) {
    toast.error('Preencha os campos corretamente!', {
      className: 'alert_error',
    });

    yield put(signFailure());
  } else {
    try {
      const response = yield call(api.post, 'session', { email, password });

      const { token, user } = response.data;

      yield put(signInSuccesss(token, user));

      api.defaults.headers.Authorization = `Bearer ${token}`;

      toast.success(`Bem vindo ao SOCIALNERD!`, {
        className: 'alert_success',
      });

      history.push('/sn');
    } catch (err) {
      toast.error(`Usuário não encontrado!`, {
        className: 'alert_error',
      });

      yield put(signFailure());
    }
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function logout() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/USER_LOGOUT', logout),
]);
