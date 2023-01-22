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
