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
    return this.http.get<Admin[]>('http://backend-tools--back.apps.eu410.prod.nextcle.com/Admin/getadmin')
  }
  signUp(admin:Admin):Observable<Object>{
    return this.http.post<Admin>('http://backend-tools--back.apps.eu410.prod.nextcle.com/Admin/register',admin)
  }

  login(admin:Admin):Observable<Object>{
    return this.http.post<Admin>('http://backend-tools--back.apps.eu410.prod.nextcle.com/Admin/login',admin)
  }

  updateAdminById(id: number,admin:Admin):Observable<object>{
    return this.http.put<Admin>(`http://backend-tools--back.apps.eu410.prod.nextcle.com/Admin/update_admin/${id}`,admin)
  }

  deleteAdminById(id: number):Observable<Object>{
    return this.http.delete(`http://backend-tools--back.apps.eu410.prod.nextcle.com/Admin/delete_admin/${id}`)
  }


}
