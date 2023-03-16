package com.onlineauction.fullstackbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import com.onlineauction.fullstackbackend.model.Property;
import com.onlineauction.fullstackbackend.model.User;

public interface PropertyRepository extends JpaRepository<Property,Integer> {

	

	@Query( value ="select count(*) from Property")
	int tryy();
	
	
		

}
