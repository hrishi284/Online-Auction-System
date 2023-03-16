package com.onlineauction.fullstackbackend.exception;

public class PropertyNotFoundException extends RuntimeException{
    public PropertyNotFoundException(int uid){
        super("Could not found the user with id "+ uid);
    }
}
