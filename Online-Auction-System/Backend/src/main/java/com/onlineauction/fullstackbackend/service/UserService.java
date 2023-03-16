package com.onlineauction.fullstackbackend.service;

import java.util.List;
import java.util.Optional;

import com.onlineauction.fullstackbackend.model.User;

public interface UserService {

	User save(User newUser);

	List<User> getAll();

	User login(String username, String passward);

	User  findbyId(int uid);

	User update(User u,User newUser);

}
