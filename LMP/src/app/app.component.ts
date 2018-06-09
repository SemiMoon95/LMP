import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './core/auth.service';
import { AngularFirestore } from 'angularfire2/firestore';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Let Me Pass';
  constructor(
    private auth: AuthService,
    private router: Router,
    private db: AngularFirestore,
  ){db.firestore.settings({ timestampsInSnapshots: true });}

  public logout(){
    this.auth.signOut();
    alert("Successfully logged out");
  }
  
  async signInWithGoogle() {
    await this.auth.googleLogin();
    return await this.afterSignIn();
  }

  private afterSignIn(){
    return this.router.navigate(['/']);
  }

}
