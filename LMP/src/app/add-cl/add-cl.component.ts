import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { CheckList } from '../checklist/checklist';
import { ChecklistControlService } from '../checklist/checklist-control.service';
import { HttpModule } from '@angular/http';
import { ClService } from '../cl.service';

@Component({
  selector: 'app-add-cl',
  templateUrl: './add-cl.component.html',
  styleUrls: ['./add-cl.component.css'],
  providers:[ ChecklistControlService, CheckList ]
})
export class AddClComponent implements OnInit {
  @Input() checklists: CheckList<any>[]=[];
  checklist_test:any[];
  form: FormGroup;

  constructor(private cls: ChecklistControlService, service: ClService) { 
    this.checklist_test=service.cllist;
  }

  ngOnInit() {
    this.form=this.cls.toFormGroup(this.checklists);
  }

  addData(){

  }

}
