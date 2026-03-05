package com.example.back_hotelaria.dto;

import lombok.Data;

// DTO para enviar os dados de um hóspede para o frontend
@Data
public class GuestResponseDTO {
    private Long id;
    private String name;
    private String telephone;
    private String email;
    private String cpf;
}