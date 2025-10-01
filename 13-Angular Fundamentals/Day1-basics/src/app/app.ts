import { Component, signal } from '@angular/core';
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { MainContent } from "./components/main-content/main-content";
@Component({
  selector: 'app-root',
  imports: [Footer, Header, MainContent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Day1-basics');
}
