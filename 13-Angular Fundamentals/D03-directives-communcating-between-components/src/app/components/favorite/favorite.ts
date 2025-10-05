import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-favorite',
  imports: [],
  templateUrl: './favorite.html',
  styleUrl: './favorite.css',
})
export class Favorite {
  @Input() favorite:string[] = [];
}
