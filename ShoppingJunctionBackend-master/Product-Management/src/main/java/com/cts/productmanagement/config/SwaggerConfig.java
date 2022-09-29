package com.cts.productmanagement.config;

import java.util.ArrayList;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.RequestHandler;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;

@Configuration
public class SwaggerConfig {

	@Bean
	public Docket api() {
		
		return new Docket(DocumentationType.SWAGGER_2)
				.apiInfo(getInfo()) 
				.select()
				.paths(PathSelectors.any())
				.apis(RequestHandlerSelectors.any())
				.build()
				;
	}
	
	
	public ApiInfo getInfo() {
		return new ApiInfo(
				"Booking Management System : ProductManagement Microservice",
				"This project is developed by Vineet",
				"101",
				"Terms of service",
				new Contact("Vineet", "vs67134@gmail.com", "boss-1"),
				"License of APIS",
				"API License URL",
				new ArrayList<>()
				);
	}
	
}
