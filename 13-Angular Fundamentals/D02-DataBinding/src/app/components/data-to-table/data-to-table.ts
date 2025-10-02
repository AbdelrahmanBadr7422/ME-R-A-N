import { Component } from '@angular/core';

@Component({
  selector: 'app-data-to-table',
  imports: [],
  templateUrl: './data-to-table.html',
  styleUrl: './data-to-table.css',
})
export class DataToTable {
  names: string[] = [];
  emails: string[] = [];
  isHidden = true;
  show(name: string, email: string) {
    console.log(name);
    this.names.push(name);
    this.emails.push(email);
    this.isHidden = false;
  }
}
