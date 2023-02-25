import React, { useContext } from 'react'
import {
    Routes,
    Route,
    useNavigate,
} from "react-router-dom";
import { BrainGameContex } from '../context/BrainGameContex';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/home-page/HomePage';
import QuestionsPage from '../pages/questions-page/QuestionsPage';


export const AppRouter = () => {

    const { questions } = useContext(BrainGameContex);
    const navigate = useNavigate()
    console.log(questions)
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/question" element={questions.length > 0 ? <QuestionsPage /> : <HomePage />} />
            </Routes>
        </>
    )
}

