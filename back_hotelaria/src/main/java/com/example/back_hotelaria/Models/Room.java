package com.example.back_hotelaria.Models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import java.math.BigDecimal;

@Entity
@Data
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // O banco de dados gerencia a geração do ID
    private Long id;

    @Column(unique = true)
    private String roomNumber;
    
    private String type;
    private BigDecimal price;
    private boolean available;

}
