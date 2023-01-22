import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './components/MainLayout'
import { MainPage, NewsPageDetails } from './modules/News'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route index element={<MainPage />} />
                    <Route path="/news/:id" element={<NewsPageDetails />} />
                    <Route path="*" element={<MainPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
