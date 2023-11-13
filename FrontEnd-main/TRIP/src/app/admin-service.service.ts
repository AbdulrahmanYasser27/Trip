import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http : HttpClient) { }
  getadminList():Observable<Admin[]>{
    return this.http.get<Admin[]>('http://localhost:8080/Admin/getadmin')
  }
  signUp(admin:Admin):Observable<Object>{
    return this.http.post<Admin>('http://localhost:8080/Admin/register',admin)
  }

  login(admin:Admin):Observable<Object>{
    return this.http.post<Admin>('http://localhost:8080/Admin/login',admin)
  }

  updateAdminById(id: number,admin:Admin):Observable<object>{
    return this.http.put<Admin>(`http://localhost:8080/Admin/update_admin/${id}`,admin)
  }

  deleteAdminById(id: number):Observable<Object>{
    return this.http.delete(`http://localhost:8080/Admin/delete_admin/${id}`)
  }


}
