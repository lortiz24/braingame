import React, { useContext } from 'react'
import {
    Routes,
    Route,
    useNavigate,
    Outlet,
} from "react-router-dom";
import { BrainGameContex } from '../context/BrainGameContex';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/home-page/HomePage';
import QuestionsPage from '../pages/questions-page/QuestionsPage';
import ResultPage from '../pages/results-page/ResultPage';


export const AppRouter = () => {

    const { questions } = useContext(BrainGameContex);
    const navigate = useNavigate()
    return (
        <>
            <Routes>
                <Route path='/' element={<MainLayout > <Outlet /> </MainLayout>}>
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/question" element={questions.length > 0 ? <QuestionsPage /> : <HomePage />} />
                    <Route path="/results" element={questions.length > 0 ? <ResultPage /> : <HomePage />} />
                </Route>
            </Routes>
        </>
    )
}

