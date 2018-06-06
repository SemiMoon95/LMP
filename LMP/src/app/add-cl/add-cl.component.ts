import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { ClService } from '../cl.service';

import { QuestionBase, CheckBox, CheckList } from '../checklist';

@Component({
  selector: 'app-add-cl',
  templateUrl: './add-cl.component.html',
  styleUrls: ['./add-cl.component.css'],
  //providers: [ QuestionControlService ]
})
export class AddClComponent implements OnInit {

  clForm: FormGroup;
  checklist: CheckList;

  ngOnChanges() {
    this.rebuildForm();
  }
  
  constructor(
    private clservice: ClService,
    private location: Location,
    private router: Router,
    private fb: FormBuilder,
  ) { this.createForm() }

  ngOnInit() {
  }

  createForm(){
    this.clForm = this.fb.group({
      title: ['', Validators.required],
      content: '',
      newq: this.fb.array([]),
    });
  }


  setQuestions(questions: QuestionBase[]) {
    const questionFGs = questions.map(question => this.fb.group(question));
    const questionFormArray = this.fb.array(questionFGs);
    this.clForm.setControl('newq', questionFormArray);
  }

  rebuildForm() {
    this.clForm.reset({
      title: this.checklist.title
    });
    this.setQuestions(this.checklist.questions);
  }

  get newq(): FormArray {
    return this.clForm.get('newq') as FormArray;
  };

  addq() {
    this.newq.push(this.fb.group(new QuestionBase()));
  }


  onSubmit(){
    this.checklist = this.prepareSaveCl();
    this.clservice.addCl(this.checklist);
    this.router.navigate(['/list']);
    this.rebuildForm();
  }


  prepareSaveCl(): CheckList{
    const formModel = this.clForm.value;

    const newqDeepCopy: QuestionBase[] = formModel.newq.map(
      (question: QuestionBase) => Object.assign({}, question)
    );

    const saveCl: CheckList = {
      id: this.clservice.getNewId(),
      title: formModel.title as string,
      content: formModel.content as string,
      category: formModel.content as string,
      questions: newqDeepCopy,
    };
    return saveCl;
  }
}
