import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment'
import { LoginModel } from '../../model/login.model';
import { LoginResultModel } from '../../model/result/loginResult.model';
import { UserModel } from '../../model/user.model';

@Injectable()
export class UserServices {

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  get(id: any): Observable<any>{
    const url = `${environment.baseURL}/api/v1/candidate/${id}`;

    return this.httpClient.get<any>(`${url}`)
        .pipe(
          retry(2),
          catchError(this.handleError))
  }

  post(user: UserModel): Observable<any>{
    const url = `${environment.baseURL}/api/v1/candidate`;
    
    return this.httpClient.post<any>(`${url}`, user)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
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
