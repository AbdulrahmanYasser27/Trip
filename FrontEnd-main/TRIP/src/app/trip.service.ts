import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trip } from './trip';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(private http:HttpClient) { }

  getTrips():Observable<Trip[]>{
    return this.http.get<Trip[]>('http://localhost:8080/Admin/getTrip')
  }
  createNewTrip(trip:Trip):Observable<Object>{
    return this.http.post<Trip>('http://localhost:8080/Admin/NewTrip',trip)
  }

  updateTripById(id: number,trip:Trip):Observable<object>{
    return this.http.put<Trip>(`http://localhost:8080/Admin/update_trip/${id}`,trip)
  }

  deleteTripById(id: number):Observable<Object>{
    return this.http.delete(`http://localhost:8080/Admin/delete_trip/${id}`)
  }
}
