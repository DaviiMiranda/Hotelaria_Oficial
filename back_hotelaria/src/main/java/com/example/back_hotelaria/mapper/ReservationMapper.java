package com.example.back_hotelaria.mapper;

import com.example.back_hotelaria.Models.Guest;
import com.example.back_hotelaria.Models.Reservation;
import com.example.back_hotelaria.Models.Room;
import com.example.back_hotelaria.dto.ReservationDTO;
import com.example.back_hotelaria.dto.ReservationResponseDTO;
import com.example.back_hotelaria.repositories.GuestRepository;
import com.example.back_hotelaria.repositories.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import jakarta.persistence.EntityNotFoundException;

@Component
public class ReservationMapper {

    @Autowired
    private GuestRepository guestRepository;

    @Autowired
    private RoomRepository roomRepository;

    public Reservation toEntity(ReservationDTO dto) {
        Reservation reservation = new Reservation();
        
        Guest guest = guestRepository.findById(dto.getGuestId())
                .orElseThrow(() -> new EntityNotFoundException("Guest not found id: " + dto.getGuestId()));
                
        Room room = roomRepository.findById(dto.getRoomId())
                .orElseThrow(() -> new EntityNotFoundException("Room not found id: " + dto.getRoomId()));
        
        reservation.setGuest(guest);
        reservation.setRoom(room);
        reservation.setCheckInDate(dto.getCheckInDate());
        reservation.setCheckOutDate(dto.getCheckOutDate());
        
        return reservation;
    }

    public ReservationResponseDTO toResponseDTO(Reservation entity) {
        ReservationResponseDTO dto = new ReservationResponseDTO();
        dto.setId(entity.getId());
        dto.setCheckInDate(entity.getCheckInDate());
        dto.setCheckOutDate(entity.getCheckOutDate());
        dto.setStatus(entity.getStatus());
        dto.setTotalValue(entity.getTotalValue());

        if (entity.getGuest() != null) {
            dto.setGuestId(entity.getGuest().getId());
            dto.setGuestName(entity.getGuest().getName());
        }

        if (entity.getRoom() != null) {
            dto.setRoomId(entity.getRoom().getId());
            dto.setRoomNumber(entity.getRoom().getRoomNumber());
        }

        return dto;
    }
}
