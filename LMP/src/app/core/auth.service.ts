import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { firebase } from '@firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from 'angularfire2/firestore';

import { NotifyService } from './notify.service';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';


interface User {
  uid: string;
  email?: string | null;
  photoURL?: string;
  displayName?: string;
}

@Injectable()
export class AuthService {

  user: Observable<User | null>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private notify: NotifyService
  ){
    this.user = this.afAuth.authState.pipe(
      switchMap(user => {
        if(user){
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else{
          return of(null);
        }
      })
    );
  }

  googleLogin(){
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  private oAuthLogin(provider: any){
    return this.afAuth.auth
      .signInWithPopup(provider)
      .then(credential => {
        this.notify.update('Welcom to LMP', 'success');
        return this.updateUserData(credential.user);
      })
      .catch(error => this.handleError(error));
  }


  private updateUserData(user: User){
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(
      `users/${user.uid}`
    );

    const data: User = {
      uid: user.uid,
      email: user.email || null,
      displayName: user.displayName || 'nameless user',
      photoURL: user.photoURL || 'https://goo.gl/Fz9nrQ'
    };
    return userRef.set(data);
  }

  private handleError(error: Error){
    console.error(error);
    this.notify.update(error.message, 'error');
  }

  signOut() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/']);
    });
  }
}
