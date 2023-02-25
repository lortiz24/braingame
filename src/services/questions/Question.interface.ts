export interface HttpAdapter {
    get<T>(url: string): Promise<T>
}



export interface QuestionApiResponse {
    response_code: number;
    results: Questions[];
}

export interface Questions {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}




