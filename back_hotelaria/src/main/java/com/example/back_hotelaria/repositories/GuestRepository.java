package com.example.back_hotelaria.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.back_hotelaria.Models.Guest;

public interface GuestRepository extends JpaRepository<Guest, Long> {
    // O Spring Data JPA implementará todos os métodos básicos de banco de dados para nós.
    // Não precisamos escrever nada aqui para um CRUD simples.
}