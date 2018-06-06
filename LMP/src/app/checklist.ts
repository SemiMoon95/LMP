//import { QuestionBase }   from './question/question-base';

export class CheckList {
    id: string;
    title: string;
    content: string;
    category: string;
    questions: QuestionBase[];
}

export class QuestionBase{
    questionTitle: string;
    checkboxes: CheckBox[];

    constructor() {
      this.questionTitle = '';
      this.checkboxes = [];
    }
}

export class CheckBox {
    option: string;
    checked: boolean;
}
