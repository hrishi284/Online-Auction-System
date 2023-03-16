package com.onlineauction.fullstackbackend.exception;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(int uid){
        super("Could not found the user with id "+ uid);
    }
}
