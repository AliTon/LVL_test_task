import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {INews} from "../../interfaces";

export interface NewsState {
    data: INews[];
    loading: boolean;
}

const initialState: NewsState = {
    data: [],
    loading: false
};

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        getNewsFeedSuccess: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.data  = action.payload;
        },
        getNewsFeed(state){
            state.loading = true;
        }
    },
});

export const { getNewsFeedSuccess, getNewsFeed} = newsSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`


