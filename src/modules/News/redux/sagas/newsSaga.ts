import { takeEvery, put, call, Effect, select } from '@redux-saga/core/effects'
import {
    getNews,
    getNewsById,
    getNewsComments,
} from '../../service/NewsService'
import { getNewsByIdAction, getNewsFeedAction } from '../actions/newsActions'
import { PayloadAction } from '@reduxjs/toolkit'
import { getNewsByIdSuccess, getNewsFeedSuccess } from '../slices/newsSlice'
import { IOrder } from '../../interfaces'

function* fetchNewsSaga({
    payload,
}: PayloadAction<{ order: IOrder }>): Generator<Effect> {
    try {
        const data = yield call(getNews, payload.order)
        yield put(getNewsFeedSuccess(data))
    } catch (error) {
        yield put({ type: 'FETCH_DATA_ERROR', payload: error })
    }
}

function* fetchNewsByIdSaga({
    payload,
}: PayloadAction<{ id: string }>): Generator<Effect> {
    try {
        const state = select((s) => s)
        const data = yield call(getNewsById, payload.id)
        const comments = yield call(getNewsComments, payload.id)
        yield put(getNewsByIdSuccess({ data, comments }))
    } catch (error) {
        console.log(error)
        yield put({ type: 'FETCH_DATA_ERROR', payload: error })
    }
}

export function* watchFetchNews() {
    yield takeEvery(getNewsFeedAction.type, fetchNewsSaga)
    yield takeEvery(getNewsByIdAction.type, fetchNewsByIdSaga)
}
