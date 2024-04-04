import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment'
import { LoginModel } from '../../model/login.model';
import { LoginResultModel } from '../../model/result/loginResult.model';
import { UserModel } from '../../model/user.model';

@Injectable()
export class VacancyServices {

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getAll(): Observable<any>{
    const url = `${environment.baseURL}/api/v1/vacancy`;

    return this.httpClient.get<any>(`${url}`)
        .pipe(
          retry(2),
          catchError(this.handleError))
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
