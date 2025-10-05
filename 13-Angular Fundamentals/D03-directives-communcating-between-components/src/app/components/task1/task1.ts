import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../types';


@Component({
  selector: 'app-task1',
  imports: [CommonModule, FormsModule],
  templateUrl: './task1.html',
  styleUrl: './task1.css',
})
export class Task1 implements OnDestroy {
  userForm!: User;
  userState!: string;
  timeId: number | null = null;

  changeState(username: string, email: string, pass: string) {
    if (username == '' || email == '' || pass == '') {
      this.userState = 'error';
      return;
    }
    if (pass.length < 6) {
      this.userState = 'warning';
      return;
    }
    this.userState = 'info';
    this.timeId = setTimeout(() => {
      this.userState = 'success';
    }, 3000);
    this.userForm = {
      username: username,
      email: email,
      password: pass,
    };
  }
  ngOnDestroy() {
    if (this.timeId) {
      clearTimeout(this.timeId);
    }
  }
}
