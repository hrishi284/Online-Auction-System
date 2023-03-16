package com.onlineauction.fullstackbackend.repository;

import com.onlineauction.fullstackbackend.model.Admin;

import net.bytebuddy.asm.Advice.Return;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepository extends JpaRepository<Admin,Integer> {

	Admin findByUsernameAndPassword(String username, String password);
	
}