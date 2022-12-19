import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { AddStudentRequest }
import { Student } from '../models/api-models/student.model'

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseApiUrl = 'https://localhost:44349';

  constructor(private httpClient: HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.baseApiUrl + '/students')
  }

  getStudent(studentId: string) {
    return this.httpClient.get<Student>(this.baseApiUrl + '/students' + studentId)
  }
}
