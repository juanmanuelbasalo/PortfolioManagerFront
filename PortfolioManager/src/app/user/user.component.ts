import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OidcClientNotification, OidcSecurityService, PublicConfiguration } from 'angular-auth-oidc-client';
import { UserManagerSettings } from 'oidc-client';
import { AuthService } from '../core/authentication/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users: any;

  constructor(private http: HttpClient,
              public authService: AuthService) { }

  ngOnInit() {
    
    if (!this.authService.isAuthenticated){
      this.authService.login();
    }
    this.getUsers();
  }

  getUsers() {

    const token = this.authService.authorizationHeaderValue;

    const httpOptions = {
        headers: new HttpHeaders({
            Authorization: token,
        }),
    };

    this.http.get('http://localhost:5000/users/GetAllUsers', httpOptions).subscribe(response => {
      this.users = response;
    }, error => {
      console.log(error);
    });
  }

}
