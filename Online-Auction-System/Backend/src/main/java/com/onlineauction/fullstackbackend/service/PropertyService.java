package com.onlineauction.fullstackbackend.service;

import java.util.List;

import com.onlineauction.fullstackbackend.model.*;

public interface PropertyService {

	Property save(Property newUser);

	List<Property> getAll();

	Property findbyId(int id);

	Property update(Property u, Property newProperty);

	int tryy();

	void deleteproperty(int id);

	


}
