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
    questionExplain: string;
    checkboxoption: string;
    checked: boolean;

    constructor() {
      this.questionTitle = '';
      this.questionExplain = '';
      this.checkboxoption = '';
    }
}
/*
export class CheckBox {
    option: string;
    checked: boolean;

    constructor(){
        this.option = '';
        this.checked = false;
    }
}
*/