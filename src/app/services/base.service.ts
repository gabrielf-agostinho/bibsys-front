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

  public getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}/${this.endpoint}`);
  }

  public getById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${this.endpoint}/${id}`);
  }

  public post(object: T): Observable<any> {
    return this.http.post(`${this.baseUrl}/${this.endpoint}`, object);
  }

  public put(object: T): Observable<any> {
    return this.http.put(`${this.baseUrl}/${this.endpoint}`, object);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${this.endpoint}/${id}`);
  }
}
