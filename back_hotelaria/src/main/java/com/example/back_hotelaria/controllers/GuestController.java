package com.example.back_hotelaria.controllers;

import com.example.back_hotelaria.dto.GuestDTO;
import com.example.back_hotelaria.dto.GuestResponseDTO;
import com.example.back_hotelaria.mapper.GuestMapper;
import com.example.back_hotelaria.Models.Guest;
import com.example.back_hotelaria.repositories.GuestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/guests")
public class GuestController {


    @Autowired
    private GuestRepository guestRepository;

    @Autowired
    private GuestMapper guestMapper; // Injeta o nosso Mapper

    // --- MÉTODO DE CRIAÇÃO (POST) ATUALIZADO ---
    @PostMapping
    public GuestResponseDTO createGuest(@RequestBody GuestDTO guestDTO) {
        // 1. Converte o DTO recebido para uma Entidade
        Guest guest = guestMapper.toEntity(guestDTO);

        // 2. Salva a Entidade no banco de dados
        Guest savedGuest = guestRepository.save(guest);

        // 3. Converte a Entidade salva (que agora tem um ID) para um DTO de resposta e o retorna
        return guestMapper.toResponseDTO(savedGuest);
    }

    // --- MÉTODO DE LISTAGEM (GET) ATUALIZADO ---
    @GetMapping
    public List<GuestResponseDTO> getAllGuests() {
        // 1. Busca todas as Entidades do banco
        List<Guest> guests = guestRepository.findAll();

        // 2. Converte a lista de Entidades para uma lista de DTOs de resposta
        return guests.stream()
                .map(guestMapper::toResponseDTO) // para cada guest, chama o método toResponseDTO
                .collect(Collectors.toList());
    }

    // ... outros métodos (getById, update, delete) seguiriam a mesma lógica ...
}