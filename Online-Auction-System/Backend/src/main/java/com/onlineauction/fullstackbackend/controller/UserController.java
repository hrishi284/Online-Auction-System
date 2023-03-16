package com.onlineauction.fullstackbackend.controller;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.onlineauction.fullstackbackend.model.Property;
import com.onlineauction.fullstackbackend.model.User;
import com.onlineauction.fullstackbackend.repository.UserRepository;
import com.onlineauction.fullstackbackend.service.UserService;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {

	@Autowired
	private UserService userv;
	
	@PostMapping("/login")
		User Login(@RequestBody User newUser) {
		System.out.println(newUser.getUsername()+" "+newUser.getPassward());
		
        User u= userv.login(newUser.getUsername(),newUser.getPassward());
        System.out.println(u);
        
     
         return u;
        
    }
	
	@PostMapping("/user")
    User newUser(@RequestBody User newUser) {
		//System.out.println("saved");
        return userv.save(newUser);
        
    }
	
	@GetMapping("/users")
    List<User> getAll() {
        return userv.getAll();
    }
	
	@GetMapping("/finduser/{id}")
	User finduser(@PathVariable(name = "id") int id) {
	
		return userv.findbyId(id);
		
	}
	
	
	@PostMapping("/updateuser/{id}")
	User updateUser(@RequestBody User newUser,@PathVariable(name = "id") int id)
	{
		User u =userv.findbyId(id);
	
		return userv.update(u,newUser);
	}
	

	
}
