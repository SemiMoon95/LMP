import { Component } from '@angular/core';

import { AuthService } from './core/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Let Me Pass';
  constructor(private auth: AuthService){}

  public logout(){
    this.auth.signOut();
    alert("Successfully logged out");
  }
  

}
