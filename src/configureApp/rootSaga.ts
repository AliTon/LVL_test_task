import { all } from '@redux-saga/core/effects'
import { watchFetchNews } from '../modules/News'

export default function* rootSaga() {
    yield all([watchFetchNews()])
}
