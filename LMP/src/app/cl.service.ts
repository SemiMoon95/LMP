import { Injectable, ViewChild, Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "angularfire2/firestore";
import { ArrayType } from '@angular/compiler/src/output/output_ast';

import { CheckList, QuestionBase } from './checklist';
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

  private resultcl: CheckList[] = [];
  resultChanged = new Subject<CheckList[]>();


  constructor(
    private http: HttpClient,
    private db: AngularFirestore,
  ) {
    db.firestore.settings({ timestampsInSnapshots: true });
    db.firestore.enablePersistence();
}

  getCllist(){
    this.db
    .collection('school-list')
    .snapshotChanges()
    .map(docArray=>{
      return docArray.map(doc=>{
        return{
          id: doc.payload.doc.id,
          title:doc.payload.doc.data().title,
          content:doc.payload.doc.data().content,
          category:doc.payload.doc.data().category,
          questions:doc.payload.doc.data().questions,
        };
      });
    })
    .subscribe((lists: CheckList[])=>{
      this.cllist=lists;
      this.listChanged.next([...this.cllist]);
    });
  }

  getCl(id: string): Observable<CheckList> {
    //console.log(this.cllist);
    return of(this.cllist.find(
      list=>list.id===id
    ));
  }

  addCl(cllist: CheckList){
    console.log(cllist);
    const id = cllist.id;
    this.db.collection('school-list').doc(id).set(cllist);
  }

  getResultList(){
    this.db
    .collection('result')
    .snapshotChanges()
    .map(docArray=>{
      return docArray.map(doc=>{
        return{
          id: doc.payload.doc.id,
          title:doc.payload.doc.data().title,
          content:doc.payload.doc.data().content,
          category:doc.payload.doc.data().category,
          questions:doc.payload.doc.data().questions,
        };
      });
    })
    .subscribe((lists: CheckList[])=>{
      this.resultcl=lists;
      this.resultChanged.next([...this.resultcl]);
    });
    console.log(this.resultcl);
  }

  getResult(id: string): Observable<CheckList> {
    console.log(this.resultcl);
    return of(this.resultcl.find(
      list=>list.id===id
    ));
  }

  addResult(cllist: CheckList){
    console.log(cllist);
    const id = cllist.id;
    this.db.collection('result').doc(id).set(cllist);
    this.getResultList();
  }

  getNewId(): string{
    const id = this.db.createId();
    return id;
  }
}