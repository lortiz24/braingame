import { ReactNode } from "react";
import { Questions } from "../services/questions/Question.interface";

export interface BrainGameContexInterface {
    questions: Questions[];
    setQuestions: React.Dispatch<React.SetStateAction<Questions[]>>;
    score: number,
    setScore: React.Dispatch<React.SetStateAction<number>>;
    correctAnswerSelected: Questions[],
    setCorrectAnswerSelected: React.Dispatch<React.SetStateAction<Questions[]>>;
    incorrectAnswersSelected: Questions[];
    setIncorrectAnswersSelected: React.Dispatch<React.SetStateAction<Questions[]>>;
    currentQuestion: number;
    setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>
}

export interface BrainGameProviderProps {
    children?: ReactNode;
}