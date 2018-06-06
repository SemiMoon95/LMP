import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './list/list.component';
import { HowtouseComponent } from './howtouse/howtouse.component';
import { ClDetailComponent } from './cl-detail/cl-detail.component';
import { LoginComponent } from './login/login.component';
import { AddClComponent } from './add-cl/add-cl.component';

const routes: Routes = [
  { path: '', redirectTo: '/howtouse', pathMatch: 'full'},
  { path: 'howtouse', component: HowtouseComponent },
  { path: 'list', component : ListComponent },
  { path: 'detail/:id', component: ClDetailComponent }, 
  { path: 'login', component: LoginComponent },
  { path: 'addcl', component: AddClComponent }, //나중에는 path를 addcl/:id로 수정해야할듯.
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
