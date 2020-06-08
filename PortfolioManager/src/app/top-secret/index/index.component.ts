import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators'
import { AuthService } from '../../core/authentication/auth.service';
import { TopSecretService } from '../top-secret.service';

@Component({
  selector: 'top-secret-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  claims: any;
  busy: boolean;

  constructor(private authService: AuthService, private topSecretService: TopSecretService) {
  }

  ngOnInit() {
    this.busy = true;
    this.topSecretService.fetchTopSecretData(this.authService.authorizationHeaderValue).subscribe(response => {
      this.claims = response;
      console.log('error ' + response);
    }, error => {
      console.log('error');
    });
  }
}