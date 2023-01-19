import { RootState } from '../../../../configureApp/configureStore'

export const selectNews = (state: RootState) => state.news.data
export const selectNewsById = (id: string) => (state: RootState) =>
    state.news.idMap[id] || {}
