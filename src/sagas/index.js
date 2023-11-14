import {fork} from 'redux-saga/effects';

import user from './user';

export default function* rootSaga() {
  yield fork(user);
}
