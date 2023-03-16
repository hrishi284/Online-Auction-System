package com.onlineauction.fullstackbackend.service;

import java.util.List;

import com.onlineauction.fullstackbackend.model.Admin;
import com.onlineauction.fullstackbackend.model.User;

public interface AdminService {
	Admin save(Admin newUser);

	List<Admin> getAll();

	Admin login(String username, String passward);

	void deleteAdmin(int id);

	
}
