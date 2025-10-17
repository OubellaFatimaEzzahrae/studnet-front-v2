import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { API_BASE_URL } from '../../constant/constants';
import { Major } from '../../model/major.model';

@Injectable({
  providedIn: 'root'
})

export class MajorService {
  private baseUrl = `${API_BASE_URL}/courses`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Major[]> {
    return this.http.get<Major[]>(this.baseUrl).pipe(catchError(this.handleError));
  }

  create(major: Major): Observable<Major> {
    return this.http.post<Major>(this.baseUrl, major).pipe(catchError(this.handleError));
  }

  update(id: number, major: Major): Observable<Major> {
    return this.http.put<Major>(`${this.baseUrl}/${id}`, major).pipe(catchError(this.handleError));
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`).pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    console.error('Erreur API', error);
    return throwError(() => error);
  }
}
