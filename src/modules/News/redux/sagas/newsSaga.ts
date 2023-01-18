import { takeEvery, put, call, Effect } from "@redux-saga/core/effects";
import { getNews } from "../../service/NewsService";
import {getNewsFeed, getNewsFeedSuccess} from "../slices/newsSlice";

function* fetchNewsSaga(): Generator<Effect> {
    try {
        const data = yield call(getNews);
        yield put(getNewsFeedSuccess(data));
    } catch (error) {
        yield put({ type: "FETCH_DATA_ERROR", payload: error });
    }
}

export function* watchFetchNews() {
    yield takeEvery(getNewsFeed.type, fetchNewsSaga);
}
