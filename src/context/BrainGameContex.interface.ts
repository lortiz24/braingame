import { ReactNode } from "react";

export interface BrainGameContexInterface {
    score: number,
    setScore: React.Dispatch<React.SetStateAction<number>>;
    correctAnswerSelected: string[],
    setCorrectAnswerSelected: React.Dispatch<React.SetStateAction<string[]>>;
    incorrectAnswersSelected: string[];
    setIncorrectAnswersSelected: React.Dispatch<React.SetStateAction<string[]>>;
}

export interface BrainGameProviderProps {
    children?: ReactNode;
}