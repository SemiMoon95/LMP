import { Component, OnInit } from '@angular/core';
import { CheckList } from '../checklist';
import { AngularFirestore } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth.service';
import { ClService } from '../cl.service';
import { Observable, Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  cllist: Subscription;
  checkLists: CheckList[];
  

  constructor(
    private clservice: ClService, 
    private db: AngularFirestore,
    private auth: AuthService,
    private router: Router,
  ){
    const settings={timestampsInSnapshots: true};
    db.app.firestore().settings(settings);
  }

  ngOnInit() {
    this.getCllist();
  }

  getCllist(): void{
    this.cllist=this.clservice.listChanged.subscribe(
      exercises=>(this.checkLists=exercises)
    );
    this.clservice.getCllist();
  }

  
}