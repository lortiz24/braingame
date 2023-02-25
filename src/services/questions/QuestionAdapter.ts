import axios from 'axios';
import { HttpAdapter } from "./Question.interface";

export class QuestionApiAdapter implements HttpAdapter {
    private readonly axios = axios;
    async get<T>(url: string) {
        const { data } = await this.axios.get<T>(url)
        return data;
    }

}