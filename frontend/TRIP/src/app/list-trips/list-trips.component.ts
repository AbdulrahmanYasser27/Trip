import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trip } from '../trip';
import { TripService } from '../trip.service';

@Component({
  selector: 'app-list-trips',
  templateUrl: './list-trips.component.html',
  styleUrls: ['./list-trips.component.css']
})
export class ListTripsComponent implements OnInit {

  trips!:Trip[]

  constructor(private tripSer:TripService, private route:Router) { }

  ngOnInit(): void {
    this.getTrips()
  }

  private getTrips(){
    this.tripSer.getTrips().subscribe(data => {
      this.trips = data
    })
  }

  updateTrip(tripId:number){
    this.route.navigate(['updateTrip', tripId])
  }

  deleteTrip(tripId:number){
    this.tripSer.deleteTripById(tripId).subscribe(data =>
      this.getTrips()
      )
  }

}
