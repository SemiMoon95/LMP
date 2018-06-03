import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from './auth.service';
import { NotifyService } from './notify.service';

@NgModule({
  providers: [AuthService, NotifyService]
})
export class CoreModule { }
