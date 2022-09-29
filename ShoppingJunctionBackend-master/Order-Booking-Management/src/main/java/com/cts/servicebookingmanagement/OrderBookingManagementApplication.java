package com.cts.servicebookingmanagement;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@EnableFeignClients
@SpringBootApplication
public class OrderBookingManagementApplication {

	public static void main(String[] args) {
		SpringApplication.run(OrderBookingManagementApplication.class, args);
	}

}
