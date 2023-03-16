package com.onlineauction.fullstackbackend.repository;

import com.onlineauction.fullstackbackend.model.User;

import net.bytebuddy.asm.Advice.Return;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Integer> {

	User findByUsernameAndPassword(String username, String password);
	
}