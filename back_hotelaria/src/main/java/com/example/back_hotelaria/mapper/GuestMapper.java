package com.example.back_hotelaria.mapper;

import com.example.back_hotelaria.dto.GuestDTO;
import com.example.back_hotelaria.dto.GuestResponseDTO;
import com.example.back_hotelaria.Models.Guest; // Importe sua classe de Entidade
import org.springframework.stereotype.Component;

@Component // Marca como um componente Spring para que possamos injetá-lo
public class GuestMapper {

    // Converte de DTO de requisição para Entidade
    public Guest toEntity(GuestDTO dto) {
        Guest guest = new Guest();
        guest.setName(dto.getName());
        guest.setCheckInDate(dto.getCheckin());
        guest.setCheckOutDate(dto.getCheckout());
        guest.setPhone(dto.getTelephone());
        guest.setEmail(dto.getEmail());
        guest.setCPF(dto.getCpf());
        guest.setRoomNumber(dto.getRoomNumber());
        return guest;
    }

    // Converte de Entidade para DTO de resposta
    public GuestResponseDTO toResponseDTO(Guest entity) {
        GuestResponseDTO dto = new GuestResponseDTO();
        dto.setId(entity.getId());
        dto.setName(entity.getName());
        dto.setCheckin(entity.getCheckInDate());
        dto.setCheckout(entity.getCheckOutDate());
        dto.setTelephone(entity.getPhone());
        dto.setEmail(entity.getEmail());
        dto.setCpf(entity.getCPF());
        dto.setRoomNumber(entity.getRoomNumber());
        return dto;
    }
}