import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { INews } from '../../interfaces'
import { stat } from 'fs'

export interface NewsState {
    data: INews[]
    loading: boolean
    idMap: Record<string, INews>
}

const initialState: NewsState = {
    data: [],
    idMap: {},
    loading: false,
}

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        getNewsFeedSuccess: (state, action) => {
            state.data = action.payload
        },
        getNewsByIdSuccess(state, { payload }) {
            state.idMap[payload.data.id] = {
                ...payload.data,
                comments: payload.comments,
            }
        },
    },
})

export const { getNewsFeedSuccess, getNewsByIdSuccess } = newsSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
