//import { QuestionBase }   from './question/question-base';

export class CheckList {
    id: string;
    title: string;
    subtitle: string;
    category: string;
    questions: ConditionBase<any>[];
}

export class ConditionBase<T>{
    value: T;
    controlType: string;
    title : string;
    
}