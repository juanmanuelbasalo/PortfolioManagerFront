import { Injectable } from '@angular/core';
import { UserManagerSettings, UserManager, User } from 'oidc-client';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Observable navItem source
  private _authNavStatusSource = new BehaviorSubject<boolean>(false);
  // Observable navItem stream
  authNavStatus$ = this._authNavStatusSource.asObservable();

  private manager = new UserManager(getClientSettings());
  public user: User | null;

  constructor(private http: HttpClient, private router: Router) {
    this.manager.getUser().then(user => {
      this.user = user;
      this._authNavStatusSource.next(this.isAuthenticated());
    });
  }

  login() {
    return this.manager.signinRedirect();
  }

  register(userRegistration: any) {
    return this.http.post('http://localhost:5000/api/users/RegisterUser', userRegistration);
  }

  async completeAuthentication() {
    this.user = await this.manager.signinRedirectCallback();
    this._authNavStatusSource.next(this.isAuthenticated());
  }

  isAuthenticated(): boolean {
    return this.user != null && !this.user.expired;
  }

  get authorizationHeaderValue(): string {
    return `${this.user.token_type} ${this.user.access_token}`;
  }

  get name(): string {
    return this.user != null ? this.user.profile.name : '';
  }

  async signout() {
    await this.manager.signoutRedirect();
  }
}

export function getClientSettings(): UserManagerSettings {
  return {
    authority: 'http://localhost:5001',
    client_id: 'angular_spa',
    redirect_uri: 'http://localhost:5002/auth-callback',
    response_type: 'code',
    scope: 'openid profile email roles EntryApi'
  };
}
