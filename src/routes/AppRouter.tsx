import React from 'react'
import {
    Routes,
    Route,
} from "react-router-dom";
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/home-page/HomePage';
import QuestionsPage from '../pages/questions-page/QuestionsPage';


export const AppRouter = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/question" element={<QuestionsPage />} />
            </Routes>
        </>
    )
}

