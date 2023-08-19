package com.hackathon.project.service;


import com.hackathon.project.entity.CarPark;

public interface CarParkService {

    public CarPark getCarParkDetails(String name);

    public Integer getTotalSpace(String name);

    public Integer getAvailableSpaces(String name);

    public CarPark updateSpace(String name, String operation);
}
