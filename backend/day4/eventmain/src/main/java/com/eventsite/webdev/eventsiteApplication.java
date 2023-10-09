package com.eventsite.webdev;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;

@OpenAPIDefinition(
		info =@Info(
				title = "event form",
				version = "1.1.2",
				description = "App Description",
				contact = @Contact(
						name = "web01",
						email = "Author Email"
						)
				)
		)

@SpringBootApplication
public class eventsiteApplication {

	public static void main(String[] args) {
		SpringApplication.run(eventsiteApplication.class, args);
	}

}
