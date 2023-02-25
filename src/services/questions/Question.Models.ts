import { HttpAdapter, QuestionApiResponse, Questions } from './Question.interface';

export class QuestionsModels {

    constructor(
        private readonly http: HttpAdapter

    ) { }


    async getQuestions(): Promise<Questions[]> {
        const data = await this.http.get<QuestionApiResponse>('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
        console.log(data.results);

        return data.results;
    }

}