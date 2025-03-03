import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
import { apiUrl } from '../appconstant';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private baseUrl: string = apiUrl;

  constructor(private http: HttpClient, private router: Router) {}

  postRequest(endpoint: string, data: any) {
    return this.http
      .post(this.constructUrl(endpoint), JSON.stringify(data), {
        headers: this.headers,
      })
      .pipe(catchError((err) => this.handleError(err)));
  }

  uploadRequest(endpoint: string, data: any) {
    return this.http
      .post(this.constructUrl(endpoint), data)
      .pipe(catchError((err) => this.handleError(err)));
  }

  putRequest(endpoint: string, data: any) {
    return this.http
      .put(this.constructUrl(endpoint), JSON.stringify(data), {
        headers: this.headers,
      })
      .pipe(catchError((err) => this.handleError(err)));
  }

  getRequest(endpoint: string) {
    const constructedUrl = this.constructUrl(endpoint);
    return this.http
      .get(constructedUrl)
      .pipe(
        catchError((err) => {
          console.error('HTTP Error:', err);
          return this.handleError(err);
        }),
        // tap(data => console.log('API Response:', data)) // Log response
      );
  }

  urlEncodedRequest(endpoint: string, data: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    return this.http
      .post(this.constructUrl(endpoint), data, { headers })
      .pipe(catchError((err) => this.handleError(err)));
  }

  deleteRequest(endpoint: string) {
    return this.http
      .delete(this.constructUrl(endpoint))
      .pipe(catchError((err) => this.handleError(err)));
  }

  private constructUrl(endpoint: string): string {
    const token = localStorage.getItem('token') || '';
    return `${this.baseUrl}/${endpoint}${token ? `?token=${token}` : ''}`;
  }

  private handleError(error: HttpErrorResponse) {
    console.error('HTTP Error:', error);
    console.log('Error Details:', error.error); // Log error details

    if (error.status === 401 || error.error === 'Invalid Token') {
      localStorage.clear();
      this.router
        .navigate(['/'])
        .catch((err) => console.error('Navigation error:', err));
    }

    return throwError(() => new Error('Something went wrong. Please try again.'));
  }
}