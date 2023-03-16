package com.onlineauction.fullstackbackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.onlineauction.fullstackbackend.model.Admin;
import com.onlineauction.fullstackbackend.model.User;
import com.onlineauction.fullstackbackend.repository.AdminRepository;

@Service
public class AdminServiceImpl implements AdminService {

	@Autowired
	AdminRepository arepo;
	
	@Override
	public Admin save(Admin newUser) {
		// TODO Auto-generated method stub
		return arepo.save(newUser);
	}

	@Override
	public List<Admin> getAll() {
		// TODO Auto-generated method stub
		return arepo.findAll();
	}

	@Override
	public Admin login(String username, String passward) {
		// TODO Auto-generated method stub
		return arepo.findByUsernameAndPassword(username,passward);
	}

	@Override
	public void deleteAdmin(int id) {
		arepo.deleteById(id);
		
	}
}
