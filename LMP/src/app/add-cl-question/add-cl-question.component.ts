import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CheckList } from '../checklist/checklist';

@Component({
  selector: 'app-add-cl-question',
  templateUrl: './add-cl-question.component.html',
  styleUrls: ['./add-cl-question.component.css']
})
export class AddClQuestionComponent {
  @Input() checklist: CheckList<any>;
  @Input() form: FormGroup;
  get isValid(){return this.form.controls[this.checklist.key].valid;}
}
