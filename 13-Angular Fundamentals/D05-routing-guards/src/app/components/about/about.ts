import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [ RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {

}
