import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Truonghoc } from '../models/truonghoc.model';

const baseUrl = 'http://localhost:8080/api/truonghoc';
@Injectable({
  providedIn: 'root'
})
export class TruonghocService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Truonghoc[]> {
    return this.http.get<Truonghoc[]>(baseUrl);
  }
  get(id: any): Observable<Truonghoc> {
    return this.http.get(`${baseUrl}/${id}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
  findByTenSV(tensv: any): Observable<Truonghoc[]> {
    return this.http.get<Truonghoc[]>(`${baseUrl}?tensv=${tensv}`);
  }
}
