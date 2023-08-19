package com.hackathon.project.controller;

import com.hackathon.project.entity.CarPark;
import com.hackathon.project.service.CarParkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

@RestController
//@CrossOrigin(origins="http://localhost:4200/")
public class CarParkController {

    @Autowired
    CarParkService carParkService;

    @GetMapping(value="/getDetails/{name}")
    public ResponseEntity<CarPark> getCarParkDetails(@PathVariable String name){
        CarPark carPark = carParkService.getCarParkDetails(name);
        return new ResponseEntity<>(carPark, HttpStatus.OK);
    }

    @GetMapping(value="/getTotalSpace/{name}")
    public ResponseEntity<Integer> getTotalSpace(@PathVariable String name){
        Integer totalSpace = carParkService.getTotalSpace(name);
        return new ResponseEntity<>(totalSpace, HttpStatus.OK);

    }

    @GetMapping(value="/getAvailableSpace/{name}")
    public ResponseEntity<Integer> getAvailableSpaces(@PathVariable String name){
        Integer availableSpace = carParkService.getAvailableSpaces(name);
        return new ResponseEntity<>(availableSpace, HttpStatus.OK);
    }

    @PutMapping(value="/updateSpaces/{name}/{operation}")
    public ResponseEntity<CarPark> updateSpace(@PathVariable String name, @PathVariable String operation){
        CarPark carPark = carParkService.updateSpace(name, operation);
        return new ResponseEntity<>(carPark, HttpStatus.OK);
    }
}
