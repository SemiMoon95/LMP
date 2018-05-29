import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './list/list.component';
import { HowtouseComponent } from './howtouse/howtouse.component';
import { ClDetailComponent } from './cl-detail/cl-detail.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/howtouse', pathMatch: 'full'},
  { path: 'howtouse', component: HowtouseComponent },
  { path: 'list', component : ListComponent },
  { path: 'detail/:id', component: ClDetailComponent }, 
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
