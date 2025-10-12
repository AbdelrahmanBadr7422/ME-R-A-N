import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private http = inject(HttpClient);
  errorHandlerService: any;
  /**
 *
 * "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "password": "123456"
  }
 */
  private getAllUsers() {
    return this.http
      .get<{}[]>('http://localhost:3000/users')
      .pipe(catchError(this.errorHandlerService.handleError));
  }
  login(){
    this.getAllUsers().subscribe({
      next:users=>users.find
    })
  }

  logout() {}

  register() {}
}
