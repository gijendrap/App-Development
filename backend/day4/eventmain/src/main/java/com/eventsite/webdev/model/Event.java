package com.eventsite.webdev.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="event")
public class Event {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long acadid;
	private String sscSchool;
	private String sscDistrict;
	private String sscState;
	private float sscMarks;
    private String hscSchool;
    private String hscDistrict;
    private String hscState;
    private float hscMarks;
    private String ugCollegeName;
    private String ugDistrict;
    private String ugState;
    private float ugCgpa;
    
}
