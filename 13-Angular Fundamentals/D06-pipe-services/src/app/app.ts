import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Products } from './services/products';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('D06-pipe-services');
  private prdSev = inject(Products)
  data:any;
  ngOnInit(): void {
    this.prdSev.getAllProducts().subscribe({
      next:res => this.data = res
    })
  }
}
