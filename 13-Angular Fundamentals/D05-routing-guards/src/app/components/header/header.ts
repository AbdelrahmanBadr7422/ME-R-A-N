import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private router = inject(Router);

  isLogged = signal<boolean>(false);

  constructor() {
    effect(() => {
      this.isLogged.update(s=>s=localStorage.getItem('authToken') !== null);
    });
  }

  logout() {
    localStorage.removeItem('authToken');
    this.isLogged.update(s=>s=false);
    this.router.navigate(['home']);
  }
}
