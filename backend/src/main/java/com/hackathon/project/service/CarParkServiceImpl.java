package com.hackathon.project.service;

import com.hackathon.project.entity.CarPark;
import com.hackathon.project.repository.CarParkRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CarParkServiceImpl implements CarParkService{


    @Autowired
    CarParkRepository carParkRepository;

    @Override
    public CarPark getCarParkDetails(String name){
        return carParkRepository.findById(name).get();
    }

    @Override
    public Integer getTotalSpace(String name){
        return carParkRepository.findById(name).get().getTotalSpace();
    }

    @Override
    public Integer getAvailableSpaces(String name){
        CarPark carPark = carParkRepository.findById(name).get();
        return carPark.getAvailableSpaces();
    }

    @Override
    public CarPark updateSpace(String name, String operation){
        CarPark fromRepo = carParkRepository.findById(name).get();
        if (operation.equals("add")){
            //add car means availableSpace reduces
            fromRepo.setAvailableSpaces(fromRepo.getAvailableSpaces() - 1);
        }
        else if (operation.equals("subtract")){
            fromRepo.setAvailableSpaces(fromRepo.getAvailableSpaces() + 1);
        }
        CarPark updated = carParkRepository.save(fromRepo);
        return updated;
    }
}
