import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { API_BASE_URL } from '../../constant/constants';
import { Student } from '../../model/student.model';

@Injectable({
  providedIn: 'root'
})

export class StudentService {
  private baseUrl = `${API_BASE_URL}/students`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Student[]> {
    return this.http.get<Student[]>(this.baseUrl).pipe(catchError(this.handleError));
  }

  create(student: Student): Observable<Student> {
    return this.http.post<Student>(this.baseUrl, student).pipe(catchError(this.handleError));
  }

  update(id: number, student: Student): Observable<Student> {
    console.log('service Data:', student);
    return this.http.put<Student>(`${this.baseUrl}/${id}`, student).pipe(catchError(this.handleError));
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`).pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    console.error('Erreur API', error);
    return throwError(() => error);
  }
}
