import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Trip } from '../trip';
import { TripService } from '../trip.service';

@Component({
  selector: 'app-trip-update',
  templateUrl: './trip-update.component.html',
  styleUrls: ['./trip-update.component.css']
})
export class TripUpdateComponent implements OnInit {

  trip:Trip = new Trip()
  id=this.route.snapshot.params['id']

  constructor(private tripSer:TripService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.tripSer.updateTripById(this.id, this.trip).subscribe(data =>{
      this.goToTrip()
    })
  }

  goToTrip(){
    this.router.navigate(['getTrips'])
  }


}
