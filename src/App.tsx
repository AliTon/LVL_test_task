import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainLayout from "./components/MainLayout";
import { NewsPage, NewsPageDetails } from "./modules/News";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout/>}>
              <Route index element={<NewsPage />} />
              <Route path="/news/:id" element={<NewsPageDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
