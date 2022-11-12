package com.example.demo.Service;

import com.example.demo.Repository.TripReposiotry;
import com.example.demo.model.Trip;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TripService {
    private final TripReposiotry tripReposiotry;
    @Autowired

    public TripService(TripReposiotry tripReposiotry) {
        this.tripReposiotry = tripReposiotry;
    }
    public void AddNewTrip(Trip trip){
        tripReposiotry.save(trip);
    }
    public List<Trip> getTrips() {

        return tripReposiotry.findAll();
    }
    public String delete_trip(long id){
        tripReposiotry.deleteById(id);
        return "Trip Deleted";
    }
    public String update_trip(Trip trip,long id){
        Optional<Trip> trip1=tripReposiotry.findById(id);
        trip1.get().setFrom_station(trip.getFrom_station());
        trip1.get().setTo_station(trip.getTo_station());
        trip1.get().setDeparture_time(trip.getDeparture_time());
        trip1.get().setArrival_time(trip.getArrival_time());
        tripReposiotry.save(trip1.get());
        return "Trip UPDATED";





    }

}
