import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import { AppRouter } from './routes/AppRouter';
import './index.css'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <MainLayout > */}
      <AppRouter />
      {/* </MainLayout> */}
    </BrowserRouter>
  </React.StrictMode>,
)
