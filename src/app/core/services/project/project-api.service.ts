import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment'


@Injectable({
  providedIn: 'root'
})

export class ProjectApiService {

  baseUrlShow = environment.baseUrl+"projects/";
  
  constructor(private http : HttpClient) { }

  getProjects() : Observable<any> {
    return this.http.get<any>(this.baseUrlShow);
  }

  getProject(id: string): Observable<any>{
    return this.http.get<any>(this.baseUrlShow+`${id}`);
  }

  addProject(show: FormData): Observable<any>{
    return this.http.post<any>(this.baseUrlShow, show);
  }

  editProject(id: string ,show: FormData): Observable<any>{
    return this.http.put<any>(this.baseUrlShow+`${id}`, show );
  }

  deleteProject(id: string): Observable<any>{
    return this.http.delete<any>(this.baseUrlShow+`${id}`);
  }
}
