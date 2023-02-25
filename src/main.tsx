import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import { AppRouter } from './routes/AppRouter';
import './index.css'
import { BrainGameProvider } from './context/BrainGameProvider';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <MainLayout > */}
      <BrainGameProvider>
        <AppRouter />
      </BrainGameProvider>
      {/* </MainLayout> */}
    </BrowserRouter>
  </React.StrictMode>,
)
