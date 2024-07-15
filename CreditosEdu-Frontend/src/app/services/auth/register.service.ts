import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { RegisterRequest } from './registerRequest';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  register(userDetails: RegisterRequest): Observable<any>{
    return this.http.post<any>(environment.urlHost + "auth/register", userDetails).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('Se produjo un Error: ', error.error);
    } else {
      console.error('Backend retornó este código de estado: ', error);
    }
    return throwError(() => new Error('Algo falló. Por favor, inténtalo de nuevo.'));
  }

}
