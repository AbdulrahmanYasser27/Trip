import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Station } from './station';

@Injectable({
  providedIn: 'root'
})
export class StationService {

  
constructor(private http : HttpClient) { }

    getStations():Observable<Station[]>{
      return this.http.get<Station[]>('http://backend-tools--back.apps.eu410.prod.nextcle.com/Admin/getStation')
    }
    createNewStation(station:Station):Observable<Object>{
      return this.http.post<Station>('http://backend-tools--back.apps.eu410.prod.nextcle.com/Admin/NewStation',station)
    }

    updateStationById(id: number,station:Station):Observable<Object>{
      return this.http.put<Station>(`http://backend-tools--back.apps.eu410.prod.nextcle.com/Admin/update_station/${id}`,station)
    }

    deleteStationById(id: number):Observable<Object>{
      return this.http.delete(`http://backend-tools--back.apps.eu410.prod.nextcle.com/Admin/delete_station/${id}`)
    }
}

