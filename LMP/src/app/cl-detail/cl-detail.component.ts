import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { CheckList } from '../checklist';
import { ClService } from '../cl.service';
import { AngularFirestore } from 'angularfire2/firestore';


@Component({
  selector: 'app-cl-detail',
  templateUrl: './cl-detail.component.html',
  styleUrls: ['./cl-detail.component.css']
})
export class ClDetailComponent implements OnInit {
  
  cl: CheckList;
  copyCl: CheckList;
  
  istrue: boolean = false;

  id: string;
  constructor(
    private route: ActivatedRoute,
    private clservice: ClService,
    private location: Location,
    private router: Router,
    private db: AngularFirestore
  ) {const settings={timestampsInSnapshots: true};
  db.app.firestore().settings(settings); }

  ngOnInit() {
    this.getCl();
    this.copyList();
  }

  getCl(): void{
    this.id = this.route.snapshot.paramMap.get('id');
    this.clservice.getCl(this.id).subscribe(cl => this.cl = cl);
  }

  copyList(): void{
    this.copyCl = Object.assign({},this.cl);
    this.copyCl.id = this.clservice.getNewId();
    console.log(this.copyCl);
  }

  goResult(){
    this.clservice.addResult(this.copyCl);
    this.router.navigate(["/result/"+this.copyCl.id]);
  }
}
