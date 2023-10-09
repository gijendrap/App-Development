package com.eventsite.webdev.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.eventsite.webdev.constant.Api;
import com.eventsite.webdev.model.Event;
import com.eventsite.webdev.service.EventService;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(Api.ACADEMIC)
@RequiredArgsConstructor
@Tag(name = "Academic")
public class CardController {
		@Autowired
		EventService as;
		

		@PostMapping("/post")
		public ResponseEntity<Event> create(final @RequestBody Event a){
			Event createData=as.create(a);
			return ResponseEntity.ok(createData);
		}
		
		@GetMapping("/all")
	    public ResponseEntity<List<Event>> getAllUsers() {
	        List<Event> academicList = as.getAllAcademicData();
	        return ResponseEntity.ok(academicList);
	    }
		
		@PutMapping("/put")
		public ResponseEntity<Event> update(final @RequestBody Event a)throws  JsonProcessingException{
			final Event updatedData=as.update(a);
			return ResponseEntity.ok(updatedData);
		}
		
		@DeleteMapping("/delete/{id}")
		public void delete(final @PathVariable Long id) {
			as.delete(id);
		}
}
