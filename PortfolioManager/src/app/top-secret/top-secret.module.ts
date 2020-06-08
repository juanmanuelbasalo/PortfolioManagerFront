import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopSecretService }  from '../top-secret/top-secret.service';

import { TopSecretRoutingModule } from './top-secret.routing-module';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [IndexComponent],
  providers: [ TopSecretService],
  imports: [
    CommonModule,
    TopSecretRoutingModule,
  ],
})
export class TopSecretModule { }