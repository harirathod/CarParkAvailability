package com.hackathon.project.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;




@Table
@Entity
public class CarPark {
    @Id
    private String carParkName;
    @Column
    private int totalSpace;
    @Column
    private int availableSpaces;

    public CarPark() {}

    public CarPark(String carParkName, int totalSpace, int availableSpaces) {
        this.carParkName = carParkName;
        this.totalSpace = totalSpace;
        this.availableSpaces = availableSpaces;
    }

    public String getCarParkName() {
        return carParkName;
    }

    public void setCarParkName(String carParkName) {
        this.carParkName = carParkName;
    }

    public int getTotalSpace() {
        return totalSpace;
    }

    public void setTotalSpace(int totalSpace) {
        this.totalSpace = totalSpace;
    }

    public int getAvailableSpaces() {
        return availableSpaces;
    }

    public void setAvailableSpaces(int availableSpaces) {
        this.availableSpaces = availableSpaces;
    }
}
