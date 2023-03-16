package com.onlineauction.fullstackbackend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.onlineauction.fullstackbackend.exception.UserNotFoundException;
import com.onlineauction.fullstackbackend.model.User;
import com.onlineauction.fullstackbackend.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository urepo;

	@Override
	public User save(User newUser) {
		// TODO Auto-generated method stub
		return urepo.save(newUser);
	}

	@Override
	public List<User> getAll() {
		// TODO Auto-generated method stub
		return urepo.findAll();
	}

	@Override
	public User login(String username, String passward) {
		// TODO Auto-generated method stub
		return urepo.findByUsernameAndPassword(username,passward);
	}

	@Override
	public User findbyId(int uid) {
		return urepo.findById(uid).orElseThrow(() -> new UserNotFoundException(uid));
	}

	@Override
	public User update(User u,User nu) {

		if (nu.getfname()!=null) {
			u.setfname(nu.getfname());	
		}
		if (nu.getlname()!=null) {
			u.setlname(nu.getlname());
		}

		if (nu.getEmail()!=null) {
			u.setEmail(nu.getEmail());	
		}

		if (nu.getPhone()!=null) {
			u.setPhone(nu.getPhone());
		}
		
		if (nu.gettype()!=null) {
			u.settype(nu.gettype());
		}
		
		if (nu.getUsername()!=null) {
			u.setUsername(nu.getUsername());
		}
		
		if (nu.getPassward()!=null) {
			u.setPassward(nu.getPassward());
		}
		
		if (nu.getPhoto()!=null) {
			u.setPhoto(nu.getPhoto());
		}
		
		if (nu.getGender()!=null) {
			u.setGender(nu.getGender());
		}
		
		if (nu.getProperty()!=null) {
			u.setProperty(nu.getProperty());
		}
		


		return urepo.save(u);
	}

}
