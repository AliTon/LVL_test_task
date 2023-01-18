import { configureStore } from '@reduxjs/toolkit';
import {newsSlice} from '../modules/News';
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();


export const store = configureStore({
  reducer: {
    [newsSlice.name]: newsSlice.reducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
