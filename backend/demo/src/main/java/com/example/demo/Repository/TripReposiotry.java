package com.example.demo.Repository;

import com.example.demo.model.Admin;
import com.example.demo.model.Trip;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TripReposiotry extends JpaRepository<Trip, Long> {
}
