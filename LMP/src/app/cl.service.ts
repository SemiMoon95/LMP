import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { CheckList } from './checklist';
import { CLlist } from './mock-cl';

@Injectable({
  providedIn: 'root'
})
export class ClService {

  constructor() { }

  getCllist(): Observable<CheckList[]>{
    return of(CLlist);
  }

  getCl(id: number) : Observable<CheckList>{
    return of(CLlist.find(cl => cl.id === id));
  }
}
