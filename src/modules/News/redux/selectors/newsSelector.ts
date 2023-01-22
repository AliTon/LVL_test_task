import { RootState } from '../../../../configureApp/configureStore'

export const selectNews = (state: RootState) => state.news.data
export const selectLoading = (state: RootState) => state.news.loading
export const selectNewsById = (id: string) => (state: RootState) =>
    state.news.idMap[id] || {}
