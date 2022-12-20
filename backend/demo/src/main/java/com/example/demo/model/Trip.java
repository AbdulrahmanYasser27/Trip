package com.example.demo.model;

import javax.persistence.*;

@Entity
@Table
public class Trip {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;
    String from_station;

    String to_station;
    String departure_time;
    public String arrival_time;
    public Trip(){

    }

    public Trip(String from_station, String to_station, String departure_time,String arrival_time) {
        this.from_station = from_station;
        this.to_station = to_station;
        this.departure_time = departure_time;
        this.arrival_time=arrival_time;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFrom_station() {
        return from_station;
    }

    public void setFrom_station(String from_station) {
        this.from_station = from_station;
    }

    public String getTo_station() {
        return to_station;
    }

    public void setTo_station(String to_station) {
        this.to_station = to_station;
    }


    public String getDeparture_time() {
        return departure_time;
    }

    public void setDeparture_time(String departure_time) {
        this.departure_time = departure_time;
    }

    public String getArrival_time() {
        return arrival_time;
    }

    public void setArrival_time(String arrival_time) {
        this.arrival_time = arrival_time;
    }
}
