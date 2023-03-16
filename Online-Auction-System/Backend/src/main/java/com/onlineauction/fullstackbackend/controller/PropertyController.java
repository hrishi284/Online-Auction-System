package com.onlineauction.fullstackbackend.controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.onlineauction.fullstackbackend.model.*;
import com.onlineauction.fullstackbackend.repository.UserRepository;
import com.onlineauction.fullstackbackend.service.*;

@RestController()
@CrossOrigin("http://localhost:3000")
public class PropertyController {

	@Autowired
	private PropertyService pserv;
	
	
	@PostMapping("/addproperty")
	Property newUser(@RequestBody Property property) {
		System.out.println("saved");
        return pserv.save(property);
        
    }
	
	@GetMapping("/properties")
    List<Property> getAll() {
        return pserv.getAll();
    }
	
	@GetMapping("/findproperty/{id}")
	Property finduser(@PathVariable(name = "id") int id) {
	
		return pserv.findbyId(id);
		
	}

	@PostMapping("/updateproperty/{id}")
	Property updateUser(@RequestBody Property newProperty,@PathVariable(name = "id") int id)
	{
		Property u =pserv.findbyId(id);
	
		return pserv.update(u,newProperty);
	}

	@GetMapping("/try")
	void tryy() {
	
		System.out.println(pserv.tryy()); 
		
	}
	@GetMapping("/deleteproperty/{id}")
	 void deleteProperty(@PathVariable(name = "id") int id)
	{
		
		 pserv.deleteproperty(id); 
		
	}
}
