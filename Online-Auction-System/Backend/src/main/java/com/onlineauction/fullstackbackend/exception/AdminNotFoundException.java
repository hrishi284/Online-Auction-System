package com.onlineauction.fullstackbackend.exception;


public class AdminNotFoundException extends RuntimeException{
    public AdminNotFoundException(int uid){
        super("Could not found the user with id "+ uid);
    }
}
