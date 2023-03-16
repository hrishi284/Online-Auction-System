package com.onlineauction.fullstackbackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.onlineauction.fullstackbackend.exception.PropertyNotFoundException;
import com.onlineauction.fullstackbackend.exception.UserNotFoundException;
import com.onlineauction.fullstackbackend.model.*;
import com.onlineauction.fullstackbackend.repository.PropertyRepository;
import com.onlineauction.fullstackbackend.repository.UserRepository;

@Service
public class PropertyServiceImpl implements PropertyService {
	
	@Autowired
	private PropertyRepository prepo;

	@Override
	public Property save(Property p) {
		// TODO Auto-generated method stub
		return prepo.save(p);
	}

	@Override
	public List<Property> getAll() {
		// TODO Auto-generated method stub
		return prepo.findAll();
	}

	@Override
	public Property findbyId(int id) {
		// TODO Auto-generated method stub
		return prepo.findById(id).orElseThrow(() -> new PropertyNotFoundException(id));
	}

	@Override
	public Property update(Property u, Property np) {
		if (np.getname()!=null) {
			u.setname(np.getname());	
		}
		
//		private String location;
		if (np.getlocation()!=null) {
			u.setlocation(np.getlocation());	
		}
//		private String photos;
		if (np.getphotos()!=null) {
			u.setphotos(np.getphotos());	
		}
//		private long area;
		if (np.getArea()!=0) {
			u.setArea(np.getArea());	
		}
//		private int rooms;
		if (np.getRooms()!=0) {
			u.setRooms(np.getRooms());	
		}
//		private String types;
		if (np.gettypes()!=null) {
			u.setTypes(np.gettypes());	
		}
//		private long baseAmount;
		if (np.getbaseAmount()!=0) {
			u.setbaseAmount(np.getbaseAmount());	
		}
//		private String description ;
		if (np.getdescription()!=null) {
			u.setdescription(np.getdescription());	
		}
//		private String aprovel;
		if (np.getaprovel()!=null) {
			u.setaprovel(np.getaprovel());	
		}
		return prepo.save(u);
	}

	@Override
	public int tryy() {
		// TODO Auto-generated method stub
		return prepo.tryy();
	}

	
	@Override
	public void deleteproperty(int id) {
		prepo.deleteById(id);
		
	}

	

	

}
