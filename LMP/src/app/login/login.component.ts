import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    public auth: AuthService,
    private router: Router
  ) { }

  async singInWithGoogle(){
    await this.auth.googleLogin();
    return await this.afterSignIn();
  }

  private afterSignIn(){
    return this.router.navigate(['/']);
  }
}
