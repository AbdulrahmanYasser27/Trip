import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Station } from '../station';
import { StationService } from '../station.service';

@Component({
  selector: 'app-station-update',
  templateUrl: './station-update.component.html',
  styleUrls: ['./station-update.component.css']
})
export class StationUpdateComponent implements OnInit {

  station:Station = new Station()
  id=this.route.snapshot.params['id']

  constructor(private statService:StationService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.statService.updateStationById(this.id, this.station).subscribe(data => {
      this.goToStation();
    })
  }

  goToStation(){
    this.router.navigate(['/getStation'])
  }


}
