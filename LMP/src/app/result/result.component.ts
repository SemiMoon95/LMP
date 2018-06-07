import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CheckList } from '../checklist';
import { ClService } from '../cl.service';

import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  cl: CheckList;
  id: string;
  progressValue: number;

  constructor(
    private route: ActivatedRoute,
    private clservice: ClService,
    private location: Location,
    private db: AngularFirestore,
  ) 
  { 
    db.firestore.settings({ timestampsInSnapshots: true });
    db.firestore.enablePersistence();
  }

  ngOnInit() {
    this.getCl();
    this.getResultValue();
  }

  getCl(): void{
    this.id = this.route.snapshot.paramMap.get('id');

  }

  getResultValue(){
    /*var value = 0;
    for(var i = 0; i < this.cl.questions.length; i++){
      var count = 0;
      for(var j = 0; j < this.cl.questions[i].checkboxes.length; j++){
        if(this.cl.questions[i].checkboxes[j].checked == true){
          count++;
        }
      }
      value += count/this.cl.questions[i].checkboxes.length;
    }

    this.progressValue = (value/this.cl.questions.length)*100;*/
    this.progressValue= 100;
    console.log(this.progressValue);
  }



}
