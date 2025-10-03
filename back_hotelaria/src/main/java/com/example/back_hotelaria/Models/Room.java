package com.example.back_hotelaria.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // O banco de dados gerencia a geração do ID
    private Long id;

    private String roomNumber;
    private String type;
    private double price;
    private boolean available;

}
