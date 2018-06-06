import { Injectable, ViewChild, Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "angularfire2/firestore";
import { ArrayType } from '@angular/compiler/src/output/output_ast';

import { CheckList } from './checklist/checklist';
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
  cllist: CheckList<any>[] = [];
  listChanged = new Subject<CheckList<any>[]>();

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
          title: doc.payload.doc.data().title,
          ...doc.payload.doc.data()
        };
      });
    })
    .subscribe((lists: CheckList<any>[])=>{
      this.cllist=lists;
      this.listChanged.next([...this.cllist]);
      console.log(lists);
    });
  }

  getCl(id: string): Observable<CheckList<any>> {
    return of(this.cllist.find(
      list=>list.id===id
    ));
  }

  addDataToDatabase(checklist:CheckList<any>){
    this.db.collection('school-list')
    .add(checklist)
  }

    /** DELETE: delete the hero from the server */
    deleteHero(hero_id){
      this.db
      .collection('hero-info')
      .doc(hero_id)
      .delete();
    }

}
