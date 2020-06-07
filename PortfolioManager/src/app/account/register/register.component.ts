import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators'
import { AuthService } from 'src/app/core/authentication/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  success: boolean;
  error: string;
  userRegistration: any;
  submitted: boolean = false;

  constructor(private authService: AuthService) {

  }

  ngOnInit() {
  }

  onSubmit() {

    this.authService.register(this.userRegistration)
      .pipe(finalize(() => {
      }))
      .subscribe(
        result => {
          if (result) {
            this.success = true;
          }
        },
        error => {
          this.error = error;
        });
  }
}