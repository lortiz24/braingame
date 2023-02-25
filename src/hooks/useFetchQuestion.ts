import { useState, useEffect } from "react";
import { Questions } from "../services/questions/Question.interface";
import { questionsModels } from "../services/questions/Question.service";
export const useFetchQuestions = () => {
    const [questions, setQuestions] = useState<Questions[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const execute = async () => {
        const data = await questionsModels.getQuestions();
        setQuestions(data);
        setIsLoading(false);
        return { isLoading, questions, execute }
    };
   

    return { questions, isLoading, execute };
};