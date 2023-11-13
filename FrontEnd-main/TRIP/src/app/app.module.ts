import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UpdateAdminComponent } from './update-admin/update-admin.component';
import { ListStationsComponent } from './list-stations/list-stations.component';
import { StationUpdateComponent } from './station-update/station-update.component';
import { CreateStationComponent } from './create-station/create-station.component';
import { CreateTripComponent } from './create-trip/create-trip.component';
import { ListTripsComponent } from './list-trips/list-trips.component';
import { TripUpdateComponent } from './trip-update/trip-update.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminListComponent,
    SignUpComponent,
    UpdateAdminComponent,
    ListStationsComponent,
    StationUpdateComponent,
    CreateStationComponent,
    CreateTripComponent,
    ListTripsComponent,
    TripUpdateComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
