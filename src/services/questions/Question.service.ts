import { QuestionsModels } from "./Question.Models"
import { QuestionApiAdapter } from "./QuestionAdapter"

const questionApiAdapter = new QuestionApiAdapter()
export const questionsModels = new QuestionsModels(questionApiAdapter)
