import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { HttpModule } from '@angular/http';

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
import { HttpClient, HttpClientModule} from '@angular/common/http';

import { CoreModule } from './core/core.module';
import { AuthService } from './core/auth.service';
import { AddClComponent } from './add-cl/add-cl.component';
import { ResultComponent } from './result/result.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ClDetailComponent,
    HowtouseComponent,
    AddClComponent,
    ResultComponent,
    LoginComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    CoreModule,
    ReactiveFormsModule,
  ],
  providers: [
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }