import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {
  private router = inject(Router);
  isLogged:boolean | null = null;
  Mock_loginForm: FormGroup;

  constructor() {
    this.Mock_loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      pass: new FormControl('', [Validators.required]),
    });
  }

  get username() {
    return this.Mock_loginForm.get('username');
  }

  get password() {
    return this.Mock_loginForm.get('pass');
  }

  onSubmit() {
    const { username, pass } = this.Mock_loginForm.value;

    if (username === 'user' && pass === 'user123') {
      localStorage.setItem('authToken', 'MOCK_TOKEN');
      this.isLogged = true;
      this.router.navigate(['/home']);
    } else {
      this.isLogged = false;
    }
  }
}
