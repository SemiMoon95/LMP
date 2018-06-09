import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../core/auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router,
    private location: Location,
  ) { }

  ngOnInit() {
  }

  async signInWithGoogle() {
    await this.auth.googleLogin();
    return await this.afterSignIn();
  }

  private afterSignIn(){
    //return this.router.navigate(['/']);
    this.location.back();
  }

}
