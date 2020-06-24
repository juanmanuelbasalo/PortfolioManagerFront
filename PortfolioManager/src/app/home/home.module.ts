import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';
import { IndexComponent } from './index/index.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    RouterModule,
    HomeRoutingModule,
    MatButtonModule,
  ],
})
export class HomeModule { }