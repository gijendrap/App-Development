package com.eventsite.webdev.service;


import java.util.List;

import com.eventsite.webdev.repository.EventRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eventsite.webdev.model.Event;

@Service
public class EventService {
	@Autowired
    EventRepo ar;
	public Event create(Event acad) {
        return ar.save(acad);
    }

	public List<Event> getAllAcademicData() {
		return ar.findAll();
	}

    public Event update(Event a) {
        return ar.save(a);
    }

    public void delete(Long id) {
        ar.deleteById(id);
    }
}
