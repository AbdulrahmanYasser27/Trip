package com.example.demo.Controller;

import com.example.demo.Service.AdminSer;
import com.example.demo.Service.StationService;
import com.example.demo.Service.TripService;
import com.example.demo.model.Admin;
import com.example.demo.model.Station;
import com.example.demo.model.Trip;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping(path = "Admin")
@CrossOrigin(origins = "*")
public class AdminCon {

    private final AdminSer adminSer;
    public final StationService stationService;
    private final TripService tripService;


    public AdminCon(AdminSer adminSer, StationService stationService, TripService tripService) {

        this.adminSer = adminSer;
        this.stationService = stationService;
        this.tripService = tripService;
    }

    @GetMapping("/getadmin")
    public List<Admin> getAdmin() {
        ;
        return adminSer.getAdmin();
    }


    @PostMapping("/register")
    public void registerNewAdmin(@RequestBody Admin admin) {

        adminSer.registerNewAdmin(admin);
    }

    @PostMapping("/login")
    public ResponseEntity<Admin> login(@RequestBody Admin admin) {

        return adminSer.loginAdmin(admin);
    }

    @PutMapping("/update_admin/{id}")
    public String Update_Admin(@RequestBody Admin admin, @PathVariable("id") long id) {
        return adminSer.update_admin(admin, id);


    }

    @DeleteMapping("/delete_admin/{id}")
    public ResponseEntity<Admin> delete_admin(@PathVariable("id") long id) {
        return adminSer.delete_admin(id);
    }

    @PostMapping("/NewStation")
    public void NewStation(@RequestBody Station station) {
        stationService.NewStation(station);
    }

    @GetMapping("/getStation")
    public List<Station> getStation() {
        return stationService.getStation();
    }

    @DeleteMapping("/delete_station/{id}")
    public String delete_station(@PathVariable("id") long id) {
        return stationService.delete_station(id);
    }

    @PutMapping("/update_station/{id}")
    public ResponseEntity<Station> update_station(Station station, @PathVariable("id") long id) {
        return stationService.update_station(station, id);
    }

    @PostMapping("/NewTrip")
    public void AddTrip(@RequestBody Trip trip) {
        tripService.AddNewTrip(trip);
    }

    @GetMapping
    public List<Trip> GetTrips() {
        return tripService.getTrips();
    }

    @DeleteMapping("/delete_trip/{id}")
    public ResponseEntity<Trip> delete_trip(@PathVariable("id") long id) {
        return tripService.delete_trip(id);
    }

    @PutMapping("/update_trip/{id}")
    public ResponseEntity<Trip> trip_update(Trip trip, @PathVariable("id") long id) {
        return tripService.update_trip(trip, id);
    }


}
