import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopSecretService }  from '../top-secret/top-secret.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { TopSecretRoutingModule } from './top-secret.routing-module';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [IndexComponent],
  providers: [ TopSecretService],
  imports: [
    CommonModule,
    TopSecretRoutingModule,
    NgxSpinnerModule,
  ],
})
export class TopSecretModule { }