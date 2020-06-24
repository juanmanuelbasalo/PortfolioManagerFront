import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators'
import { AuthService } from 'src/app/core/authentication/auth.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  hide = true;
  hideRepeat = true;
  success: boolean;
  error: string;
  userRegistration: any = {};
  submitted = false;

  constructor(private authService: AuthService) {

  }

  ngOnInit() {
  }

  onSubmit() {

    this.error = '';

    if (!this.validModel()) {
      return;
    }

    this.authService.register(this.userRegistration)
      .pipe(finalize(() => {
      }))
      .subscribe(
        result => {
          this.success = true;
        },
        error => {
          this.error = error;
        });
  }

  validModel(): boolean {

    if (this.userRegistration.password !== this.userRegistration.repeatPassword) {
      this.error = 'Passwords do not match';
      return false;
    }
    return true;
  }
}