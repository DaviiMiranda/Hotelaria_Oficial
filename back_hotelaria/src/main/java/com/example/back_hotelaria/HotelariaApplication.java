package com.example.back_hotelaria;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan(basePackages = { "com.example.back_hotelaria.Controllers" })
@EntityScan(basePackages = { "com.example.back_hotelaria.Models" })
@EnableJpaRepositories(basePackages = { "com.example.back_hotelaria.Repositories" })
public class HotelariaApplication {

	public static void main(String[] args) {
		SpringApplication.run(HotelariaApplication.class, args);
	}

}