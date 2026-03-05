package com.example.back_hotelaria.services;

import com.example.back_hotelaria.Models.Guest;
import com.example.back_hotelaria.Models.Reservation;
import com.example.back_hotelaria.Models.Room;
import com.example.back_hotelaria.dto.DashboardDTO;
import com.example.back_hotelaria.repositories.GuestRepository;
import com.example.back_hotelaria.repositories.ReservationRepository;
import com.example.back_hotelaria.repositories.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.List;

@Service
public class DashboardService {

    @Autowired
    private RoomRepository roomRepository;

    @Autowired
    private GuestRepository guestRepository;
    
    @Autowired
    private ReservationRepository reservationRepository;

    public DashboardDTO getStats() {
        long totalRooms = roomRepository.count();
        long availableRooms = roomRepository.countByAvailable(true);
        long occupiedRooms = totalRooms - availableRooms;

        long totalGuests = guestRepository.count();
        
        List<Reservation> allReservations = reservationRepository.findAll();

        double totalStayDays = 0;
        BigDecimal totalRevenue = BigDecimal.ZERO;
        int validStays = 0;

        for (Reservation reservation : allReservations) {
            if (reservation.getCheckInDate() != null && reservation.getCheckOutDate() != null) {
                // Considerando apenas reservas que não foram canceladas
                if (!"Cancelada".equalsIgnoreCase(reservation.getStatus())) {
                    long days = ChronoUnit.DAYS.between(reservation.getCheckInDate(), reservation.getCheckOutDate());
                    if (days > 0) {
                        totalStayDays += days;
                        validStays++;
                    } else if (days == 0){
                        // Se for no mesmo dia, conta ao menos 1
                        totalStayDays += 1;
                        validStays++;
                    }
                    if(reservation.getTotalValue() != null){
                        totalRevenue = totalRevenue.add(reservation.getTotalValue());
                    }
                }
            }
        }

        double averageStayDays = validStays > 0 ? totalStayDays / validStays : 0;
        double occupancyRate = totalRooms > 0 ? ((double) occupiedRooms / totalRooms) * 100 : 0;

        return DashboardDTO.builder()
                .totalRooms(totalRooms)
                .availableRooms(availableRooms)
                .occupiedRooms(occupiedRooms)
                .totalGuests(totalGuests)
                .averageStayDays(Math.round(averageStayDays * 10.0) / 10.0)
                .totalRevenue(totalRevenue.doubleValue())
                .occupancyRate(Math.round(occupancyRate * 10.0) / 10.0)
                .build();
    }
}
