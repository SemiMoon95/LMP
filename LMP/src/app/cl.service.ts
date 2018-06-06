import { Injectable, ViewChild, Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "angularfire2/firestore";
import { ArrayType } from '@angular/compiler/src/output/output_ast';

import { CheckList } from './checklist';
import { QuestionBase } from './question/question-base';
import 'rxjs/add/operator/map';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ClService {
  school_list: AngularFirestoreCollection<any>;
  school_documet: AngularFirestoreDocument<any>;
  private cllist: CheckList[] = [];
  listChanged = new Subject<CheckList[]>();


  constructor(
    private http: HttpClient,
    private db: AngularFirestore,
  ) {}

  getCllist(){
    this.db
    .collection('school-list')
    .snapshotChanges()
    .map(docArray=>{
      return docArray.map(doc=>{
        return{
          id: doc.payload.doc.id,
          title:doc.payload.doc.data().title,
          subtitle:doc.payload.doc.data().subtitle,
          category:doc.payload.doc.data().category,
        };
      });
    })
    .subscribe((lists: CheckList[])=>{
      this.cllist=lists;
      this.listChanged.next([...this.cllist]);
    });
  }

  getCl(id: string): Observable<CheckList> {
    return of(this.cllist.find(
      list=>list.id===id
    ));
  }

  addCl(title: string, subtitle:string, category: string, questions: QuestionBase<any>[]){
    const id = this.db.createId();
    const newCl = {id, title, subtitle, category, questions}
    this.db.collection('school-list').doc(id).set(newCl);
  }
}