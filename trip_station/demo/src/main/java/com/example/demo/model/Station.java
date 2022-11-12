package com.example.demo.model;

import javax.persistence.*;

@Entity
@Table
public class Station {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;
    String Name;
    public Station(){

    }

    public Station(String name) {
        Name = name;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }



}
