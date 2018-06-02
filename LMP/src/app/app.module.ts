import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule, AngularFireStorage } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ClDetailComponent } from './cl-detail/cl-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { HowtouseComponent } from './howtouse/howtouse.component';

import { MaterialModule } from './material.module';
import { LoginComponent } from './login/login.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { CoreModule } from './core/core.module';
import { AuthService } from './core/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ClDetailComponent,
    HowtouseComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    CoreModule,
  ],
  providers: [
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
