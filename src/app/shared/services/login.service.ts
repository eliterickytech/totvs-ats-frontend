import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment'
import { LoginModel } from '../../model/login.model';
import { LoginResultModel } from '../../model/result/loginResult.model';

@Injectable()
export class LoginServices {

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  post(data: LoginModel): Observable<any>{
    const url = `${environment.baseURL}/api/v1/login`;

    return this.httpClient.post<any>(`${url}`, data)
        .pipe(
          retry(2),
          catchError(this.handleError))
  }
  getUserIdAuthenticated(): any {
    return localStorage.getItem('id')
  }

  IsAuthenticated(): boolean{
    return localStorage.getItem("token") ? true : false
  } 
  
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {

      errorMessage = error.error.message;
    } else {

      errorMessage = `StatusCode ${error.status}, ` + `Message: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
