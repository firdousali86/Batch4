import {fork} from 'redux-saga/effects';

import user from './user';
import item from './item';
import movie from './movie';
import itemEvery from './itemEvery';
import itemLatest from './itemLatest';

export default function* rootSaga() {
  yield fork(user);
  yield fork(item);
  yield fork(itemEvery);
  yield fork(itemLatest);
  yield fork(movie);
}
