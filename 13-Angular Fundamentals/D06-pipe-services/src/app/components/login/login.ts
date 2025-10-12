import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
private router = inject(Router);
  isLogged:boolean | null = null;
  loginForm: FormGroup;
  data:any;
  constructor() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      pass: new FormControl('', [Validators.required]),
    });
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('pass');
  }

  onSubmit() {
    const { username, pass } = this.loginForm.value;

    if (username === 'user' && pass === 'user123') {
      localStorage.setItem('authToken', 'MOCK_TOKEN');
      this.isLogged = true;
      this.router.navigate(['/home']);
    } else {
      this.isLogged = false;
    }
  }
}
