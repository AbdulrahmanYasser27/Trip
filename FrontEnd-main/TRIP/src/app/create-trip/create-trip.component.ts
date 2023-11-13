import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trip } from '../trip';
import { TripService } from '../trip.service';

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.css']
})
export class CreateTripComponent implements OnInit {

  trip:Trip = new Trip()

  constructor(private tripSer:TripService, private route:Router) { }

  ngOnInit(): void {
  }

  createTrip(){
    this.tripSer.createNewTrip(this.trip).subscribe(data=>{
      console.log(data)
      this.goToTrips()
    }, error => console.log(error))
  }

  goToTrips(){
    this.route.navigate(['getTrips'])
  }

  onSubmit(){
    console.log(this.trip)
    this.createTrip()
  }


}
