import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';


/* Module Imports */
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { AccountModule } from './account/account.module';
import { ShellModule } from './shell/shell.module';
import { TopSecretModule } from './top-secret/top-secret.module';
import { IndexComponent } from './top-secret/index/index.component';

@NgModule({
   declarations: [
      AppComponent,
      AuthCallbackComponent,
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      CoreModule,
      HomeModule,
      TopSecretModule,
      AccountModule,
      AppRoutingModule,
      ShellModule,
   ],
   providers: [
   ],
   bootstrap: [AppComponent]
})
export class AppModule { }