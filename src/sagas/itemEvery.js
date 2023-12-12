import {call, put, takeEvery} from 'redux-saga/effects';
import {itemActions} from '../features/item/itemSlicer';
import {ApiHelper} from '../helpers';

const {requestEvery, success, failure} = itemActions;

function callGetRequest(url, data, headers) {
  return ApiHelper.get(url, data, headers);
}

function* watchRequest(action) {
  const {payload} = action;

  try {
    let response;
    response = yield call(callGetRequest, payload.uri, {});
    yield put(success(response));
  } catch (ex) {
    yield put(failure(err?.message));
  }
}

export default function* root() {
  yield takeEvery(requestEvery, watchRequest);
}
