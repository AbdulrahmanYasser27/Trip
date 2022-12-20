import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToAdmins(){
    this.router.navigate(['getAdmins'])
  }

  goToStations(){
    this.router.navigate(['getStation'])    
  }

  goToTrips(){
    this.router.navigate(['getTrips'])    
  }

  createStation(){
    this.router.navigate(['createStation'])
  }

  createTrip(){
    this.router.navigate(['createTrip'])    
  }


}
