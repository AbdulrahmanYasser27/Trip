package com.example.demo.Controller;

import com.example.demo.Service.AdminSer;
import com.example.demo.Service.StationService;

import com.example.demo.model.Admin;
import com.example.demo.model.Station;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping(path = "Admin")
@CrossOrigin(origins = "http://localhost:4200")
public class AdminCon {

	private final AdminSer adminSer;
	public final StationService stationService;
	

	public AdminCon(AdminSer adminSer, StationService stationService) {

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
	public void Update_Admin(@RequestBody Admin admin, @PathVariable("id") long id) {
		adminSer.update_admin(admin, id);
	}

	@DeleteMapping("/delete_admin/{id}")
	public void delete_admin(@PathVariable("id") long id) {
		adminSer.delete_admin(id);
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
	public void delete_station(@PathVariable("id") long id) {
		stationService.delete_station(id);
	}

	@PutMapping("/update_station/{id}")
	public void update_station(@RequestBody Station station, @PathVariable("id") long id) {
		stationService.update_station(station, id);
	}