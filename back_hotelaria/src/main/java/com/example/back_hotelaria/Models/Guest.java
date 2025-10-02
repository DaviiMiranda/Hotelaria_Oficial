package com.example.back_hotelaria.Models;
import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity // Marca esta classe como uma entidade/tabela do banco de dados
@Data   // Anotação do Lombok para gerar Getters, Setters, toString, etc.
public class Guest {

    @Id // Define o campo "id" como a chave primária
    @GeneratedValue(strategy = GenerationType.IDENTITY) // O banco de dados gerencia a geração do ID
    private Long id;

    private String name;
    private String email;
    private String phone;
    private String CPF;
    @JsonProperty("checkin")
    private String checkInDate;

    @JsonProperty("checkout")
    private String checkOutDate;
    private int roomNumber;
}