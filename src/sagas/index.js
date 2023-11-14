import {fork} from 'redux-saga/effects';

import user from './user';
import item from './item';

export default function* rootSaga() {
  yield fork(user);
  yield fork(item);
}
