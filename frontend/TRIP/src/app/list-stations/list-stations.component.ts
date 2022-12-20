import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Station } from '../station';
import { StationService } from '../station.service';

@Component({
  selector: 'app-list-stations',
  templateUrl: './list-stations.component.html',
  styleUrls: ['./list-stations.component.css']
})
export class ListStationsComponent implements OnInit {

  stations!:Station[]

  constructor(private statService:StationService, private route:Router) { }

  ngOnInit(): void {
    this.getStations()
  }
  private getStations(){
    this.statService.getStations().subscribe(data => {
      this.stations = data
    })
  }

  updateStation(stationId:number){
    this.route.navigate(['updateStation', stationId])
  }

  deleteStation(stationId:number){
    this.statService.deleteStationById(stationId).subscribe(data => {
      this.getStations()
    })
  }
  
}
