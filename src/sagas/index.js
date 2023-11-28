import {fork} from 'redux-saga/effects';

import user from './user';
import item from './item';
import movie from './movie';

export default function* rootSaga() {
  yield fork(user);
  yield fork(item);
  yield fork(movie);
}
