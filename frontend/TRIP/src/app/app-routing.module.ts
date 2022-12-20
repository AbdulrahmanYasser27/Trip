import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminListComponent } from './admin-list/admin-list.component';
import { CreateStationComponent } from './create-station/create-station.component';
import { CreateTripComponent } from './create-trip/create-trip.component';
import { HomeComponent } from './home/home.component';
import { ListStationsComponent } from './list-stations/list-stations.component';
import { ListTripsComponent } from './list-trips/list-trips.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { StationUpdateComponent } from './station-update/station-update.component';
import { TripUpdateComponent } from './trip-update/trip-update.component';
import { UpdateAdminComponent } from './update-admin/update-admin.component';

const routes: Routes = [
  {path:'getAdmins', component:AdminListComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignUpComponent},
  { path:'updateAdmin/:id', component:UpdateAdminComponent},

  { path:'getTrips', component:ListTripsComponent},
  { path:'createTrip', component:CreateTripComponent},
  { path:'updateTrip/:id', component:TripUpdateComponent},

 { path:'getStation', component:ListStationsComponent},
 { path:'createStation', component:CreateStationComponent},
 { path:'updateStation/:id', component:StationUpdateComponent},

 { path:'home', component:HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
