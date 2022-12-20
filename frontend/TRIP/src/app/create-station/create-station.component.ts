import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Station } from '../station';
import { StationService } from '../station.service';

@Component({
  selector: 'app-create-station',
  templateUrl: './create-station.component.html',
  styleUrls: ['./create-station.component.css']
})
export class CreateStationComponent implements OnInit {

  station: Station = new Station()

  constructor(private statService:StationService, private route:Router) { }

  ngOnInit(): void {
  }

  createStation(){
    this.statService.createNewStation(this.station).subscribe(data => {
      console.log(data)
      this.goToStations()
    }, error => console.log(error))
  }

  goToStations(){
    this.route.navigate(['getStation'])
  }

  onSubmit(){
    console.log(this.station)
    this.createStation();
  }


}
