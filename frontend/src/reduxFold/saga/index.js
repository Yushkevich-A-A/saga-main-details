import { takeLatest, put, spawn, call } from 'redux-saga/effects';
import { fetchItemError, fetchItemSuccess, serviceFetchListError, serviceFetchListSuccess } from '../actions/actions';
import { fetchItem, fetchList } from '../api';

// list

function* handleFetchList() {
    try {
        const data = yield call(fetchList);
        yield put(serviceFetchListSuccess(data));
    } catch (e) {
        yield put(serviceFetchListError(e.message));
    }
}

function* watchFetchList() {
    yield takeLatest('SERVICE_FETCH_REQUEST', handleFetchList);
}

// item

function* handleFetchItem(action) {
    try {
        const data = yield call(fetchItem, action.payload.id);
        yield put(fetchItemSuccess(data));
    } catch (e) {
        yield put(fetchItemError(e.message));
    }
}

function* watchFetchItem() {
    yield takeLatest('FETCH_ITEM_REQUEST', handleFetchItem);
}

export default function* saga() {
    yield spawn(watchFetchList);
    yield spawn(watchFetchItem);
}