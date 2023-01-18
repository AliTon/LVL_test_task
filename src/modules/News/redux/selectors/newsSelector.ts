import { RootState } from '../../../../configureApp/configureStore'

export const selectNews = (state: RootState) => state.news.data
