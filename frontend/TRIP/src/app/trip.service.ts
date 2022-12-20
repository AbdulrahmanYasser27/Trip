import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Trip } from './trip';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(private http:HttpClient) { }

  getTrips():Observable<Trip[]>{
    return this.http.get<Trip[]>('http://backend-tools--back.apps.eu410.prod.nextcle.com/Admin/getTrip')
  }
  createNewTrip(trip:Trip):Observable<Object>{
    return this.http.post<Trip>('http://backend-tools--back.apps.eu410.prod.nextcle.com/Admin/NewTrip',trip)
  }

  updateTripById(id: number,trip:Trip):Observable<object>{
    return this.http.put<Trip>(`http://backend-tools--back.apps.eu410.prod.nextcle.com/Admin/update_trip/${id}`,trip)
  }

  deleteTripById(id: number):Observable<Object>{
    return this.http.delete(`http://backend-tools--back.apps.eu410.prod.nextcle.com/Admin/delete_trip/${id}`)
  }
}
 