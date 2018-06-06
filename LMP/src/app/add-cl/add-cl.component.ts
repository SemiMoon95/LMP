import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { ClService } from '../cl.service';
import { QuestionBase } from '../question/question-base';
import { TextboxQuestion } from '../question/question-textbox';
import { DropdownQuestion } from '../question/question-dropdown';

import { QuestionControlService } from '../question-control.service';

@Component({
  selector: 'app-add-cl',
  templateUrl: './add-cl.component.html',
  styleUrls: ['./add-cl.component.css'],
  //providers: [ QuestionControlService ]
})
export class AddClComponent implements OnInit {


  //form: FormGroup;
  questions: QuestionBase<any>[] = [];

  
  constructor(
    private clservice: ClService,
    private location: Location,
    private router: Router,
    //private qcs: QuestionControlService,
  ) { }


  ngOnInit() {
    //this.form = this.qcs.toFormGroup(this.questions);
  }
/*
  addquestion(newq: QuestionBase<any>){
    this.questions.push(newq);
  }
  newtextbox(){
    this.addquestion(new TextboxQuestion({key: "a"}));
  }
  newdropdown(){
    this.addquestion(new DropdownQuestion());
  }
*/
  addCl(title: string, subtitle: string, category: string){
    this.clservice.addCl(title, subtitle, category, this.questions)
    this.router.navigate(['/list']);
  }
}