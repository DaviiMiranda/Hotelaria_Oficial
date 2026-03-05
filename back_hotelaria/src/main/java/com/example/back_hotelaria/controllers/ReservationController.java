package com.example.back_hotelaria.controllers;

import com.example.back_hotelaria.Models.Reservation;
import com.example.back_hotelaria.Models.Room;
import com.example.back_hotelaria.dto.ReservationDTO;
import com.example.back_hotelaria.dto.ReservationResponseDTO;
import com.example.back_hotelaria.mapper.ReservationMapper;
import com.example.back_hotelaria.repositories.ReservationRepository;
import com.example.back_hotelaria.repositories.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.time.temporal.ChronoUnit;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/reservations")
public class ReservationController {

    @Autowired
    private ReservationRepository reservationRepository;

    @Autowired
    private RoomRepository roomRepository;

    @Autowired
    private ReservationMapper reservationMapper;

    @PostMapping
    public ReservationResponseDTO createReservation(@RequestBody ReservationDTO dto) {
        Reservation reservation = reservationMapper.toEntity(dto);
        
        // Calcular valor total caso não venha no DTO
        if(reservation.getCheckInDate() != null && reservation.getCheckOutDate() != null) {
            long days = ChronoUnit.DAYS.between(reservation.getCheckInDate(), reservation.getCheckOutDate());
            if(days <= 0) days = 1; // No mínimo 1 diária
            
            BigDecimal price = reservation.getRoom().getPrice();
            if(price != null){
               reservation.setTotalValue(price.multiply(BigDecimal.valueOf(days)));
            }
        }
        
        reservation.setStatus("Agendada");

        Reservation savedReservation = reservationRepository.save(reservation);
        return reservationMapper.toResponseDTO(savedReservation);
    }

    @GetMapping
    public List<ReservationResponseDTO> getAllReservations() {
        return reservationRepository.findAll().stream()
                .map(reservationMapper::toResponseDTO)
                .collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    public ReservationResponseDTO getReservationById(@PathVariable Long id) {
        Reservation reservation = reservationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Reservation not found"));
        return reservationMapper.toResponseDTO(reservation);
    }

    @PutMapping("/{id}/status")
    public ReservationResponseDTO updateStatus(@PathVariable Long id, @RequestParam String status) {
        Reservation reservation = reservationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Reservation not found"));
        reservation.setStatus(status);
        return reservationMapper.toResponseDTO(reservationRepository.save(reservation));
    }

    @DeleteMapping("/{id}")
    public void deleteReservation(@PathVariable Long id) {
        reservationRepository.deleteById(id);
    }
}
