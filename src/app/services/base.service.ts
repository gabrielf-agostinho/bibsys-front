import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService<T> {
  private baseUrl: string = environment.baseUrl;

  constructor(
    private http: HttpClient,
    private endpoint: String
  ) { }

  protected getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}/${this.endpoint}`);
  }

  protected getById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${this.endpoint}/${id}`);
  }

  protected post(object: T): Observable<any> {
    return this.http.post(`${this.baseUrl}/${this.endpoint}`, object);
  }

  protected put(object: T): Observable<any> {
    return this.http.put(`${this.baseUrl}/${this.endpoint}`, object);
  }

  protected delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${this.endpoint}/${id}`);
  }
}
