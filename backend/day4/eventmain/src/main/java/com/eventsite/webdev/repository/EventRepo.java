package com.eventsite.webdev.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.eventsite.webdev.model.Event;

@Repository
public interface EventRepo extends JpaRepository<Event,Long> {

}
