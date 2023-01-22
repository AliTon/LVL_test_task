// REDUX
export { newsSlice } from './redux/slices/newsSlice'
export { watchFetchNews } from './redux/sagas/newsSaga'

// PAGES
export { default as NewsPage } from './pages/NewsPage'
export { default as NewsPageDetails } from './pages/NewsPageDetails'
export { default as MainPage } from './pages/Mian'

//Interfaces

export * from './interfaces'
