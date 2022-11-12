package com.example.demo.Controller;

import com.example.demo.Service.AdminSer;

import com.example.demo.model.Admin;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping(path = "Admin")
@CrossOrigin(origins = "http://localhost:4200")
public class AdminCon {

	private final AdminSer adminSer;
	

	public AdminCon(AdminSer adminSer) {

		this.adminSer = adminSer;
		
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

	
}
