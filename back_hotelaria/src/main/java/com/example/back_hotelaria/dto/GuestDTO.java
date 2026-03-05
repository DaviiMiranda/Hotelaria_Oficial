package com.example.back_hotelaria.dto;

import lombok.Data;

// DTO para receber os dados de um novo registro de hóspede
@Data
public class GuestDTO {
    private String name;
    private String telephone;
    private String email;
    private String cpf;
}