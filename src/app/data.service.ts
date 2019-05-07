import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Product, ProductFunction } from './product-list/product';
import { PUERH_FUNCTIONS } from './product-list/product-data';
import { Contact } from './contact-us/contact';
import { CONTACTS } from './contact-us/contact-data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseApi: string;

  constructor(private http: HttpClient) {
    this.baseApi = 'https://zcteaapi.azurewebsites.net/api/';
  }

  getProductsByCategory(categoryId: number): Observable<Product[]> {
    const url = `${this.baseApi}Products/ByCategory/${categoryId}`;
    const options = {
      headers: new HttpHeaders({
        'Accept': 'application/json'
      })
    };
    return this.http.get<Product[]>(url, options)
      .pipe(
        catchError(this.handleError)
      );
  }

  getPuErhFunctions(): ProductFunction[] {
    return PUERH_FUNCTIONS;
  }

  getContacts(): Contact[] {
    return CONTACTS;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
