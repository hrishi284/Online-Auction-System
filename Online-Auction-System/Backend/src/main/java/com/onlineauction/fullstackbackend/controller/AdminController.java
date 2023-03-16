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
import com.onlineauction.fullstackbackend.model.Admin;
import com.onlineauction.fullstackbackend.repository.UserRepository;
import com.onlineauction.fullstackbackend.service.AdminService;

@RestController
@CrossOrigin("http://localhost:3000")
public class AdminController {

	@Autowired
	private AdminService aserv;
	
	@PostMapping("/Admin")
		Admin Login(@RequestBody Admin newUser) {
		System.out.println(newUser.getUsername()+" "+newUser.getPassword());
		
        Admin u= aserv.login(newUser.getUsername(),newUser.getPassword());
        System.out.println(u);
        
     
         return u;
        
    }
	
	@PostMapping("/adminadd")
	Admin newUser(@RequestBody Admin newUser) {
		//System.out.println("saved");
        return aserv.save(newUser);
        
    }
	
	@GetMapping("/admins")
    List<Admin> getAll() {
        return aserv.getAll();
    }
	
	@GetMapping("/deleteadmin/{id}")
	 void deleteAdmin(@PathVariable(name = "id") int id)
	{
		
		 aserv.deleteAdmin(id); 
		
	}	

	
}
