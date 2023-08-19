package com.hackathon.project.repository;

import com.hackathon.project.entity.CarPark;
import org.springframework.context.annotation.PropertySource;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface CarParkRepository extends CrudRepository<CarPark, String> {
}
