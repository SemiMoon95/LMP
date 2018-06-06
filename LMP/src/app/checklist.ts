import { QuestionBase }   from './question/question-base';

export class CheckList {
    id: string;
    title: string;
    subtitle: string;
    category: string;
    questions: QuestionBase<any>[];
}