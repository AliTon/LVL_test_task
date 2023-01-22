import { createSlice } from '@reduxjs/toolkit'
import { INews } from '../../interfaces'
import { getNewsByIdAction, getNewsFeedAction } from '../actions/newsActions'

export interface NewsState {
    data: INews[]
    loading: boolean
    idMap: Record<string, INews>
}

const initialState: NewsState = {
    data: [],
    idMap: {},
    loading: true,
}

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        getNewsFeedSuccess: (state, action) => {
            state.data = action.payload
            state.loading = false
        },
        getNewsByIdSuccess(state, { payload }) {
            state.idMap[payload.data.id] = {
                ...payload.data,
                comments: payload.comments,
            }
            state.loading = false
        },
    },
    extraReducers: {
        [getNewsByIdAction.type as string]: (state: NewsState) => {
            state.loading = true
        },
        [getNewsFeedAction.type as string]: (state: NewsState) => {
            state.loading = true
        },
    },
})

export const { getNewsFeedSuccess, getNewsByIdSuccess } = newsSlice.actions
