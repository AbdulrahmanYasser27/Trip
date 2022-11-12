package com.example.demo.Service;

import com.example.demo.Repository.AdminReposiotry;
import com.example.demo.model.Admin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AdminSer {
	private final AdminReposiotry adminReposiotry;

	@Autowired
	public AdminSer(AdminReposiotry adminReposiotry) {
		this.adminReposiotry = adminReposiotry;
	}

	public List<Admin> getAdmin() {

		return adminReposiotry.findAll();
	}

	public void registerNewAdmin(Admin admin) {

		adminReposiotry.save(admin);

	}

	public ResponseEntity<Admin> loginAdmin(Admin admin) {
		boolean flag = false;

		for (int i = 0; i < adminReposiotry.findAll().size(); i++) {
			if (adminReposiotry.findAll().get(i).getEmail().equals(admin.getEmail())
					&& adminReposiotry.findAll().get(i).getPassword().equals(admin.getPassword())) {
				flag = true;
			}
		}

		if (flag == true) {
			return ResponseEntity.ok(admin);
		} else
			return (ResponseEntity<Admin>) ResponseEntity.internalServerError();
	}

	public void update_admin(Admin admin, long id) {
		Optional<Admin> admin1 = adminReposiotry.findById(id);
		admin1.get().setAdmin_Name(admin.getAdmin_Name());
		admin1.get().setFirst_Name(admin.getFirst_Name());
		admin1.get().setLast_Name(admin.getLast_Name());
		admin1.get().setPassword(admin.getPassword());
		adminReposiotry.save(admin1.get());
	}

	public void delete_admin(long id) {
		adminReposiotry.deleteById(id);
	}

}
