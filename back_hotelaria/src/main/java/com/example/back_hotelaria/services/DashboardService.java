package com.example.back_hotelaria.services;

import com.example.back_hotelaria.Models.Guest;
import com.example.back_hotelaria.Models.Room;
import com.example.back_hotelaria.dto.DashboardDTO;
import com.example.back_hotelaria.repositories.GuestRepository;
import com.example.back_hotelaria.repositories.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class DashboardService {

    @Autowired
    private RoomRepository roomRepository;

    @Autowired
    private GuestRepository guestRepository;

    public DashboardDTO getStats() {
        long totalRooms = roomRepository.count();
        long availableRooms = roomRepository.countByAvailable(true);
        long occupiedRooms = totalRooms - availableRooms;

        List<Guest> allGuests = guestRepository.findAll();
        long totalGuests = allGuests.size();

        // Build a map of roomType -> price from the Room table
        Map<String, Double> priceByType = roomRepository.findAll().stream()
                .collect(Collectors.toMap(
                        Room::getType,
                        Room::getPrice,
                        (existing, replacement) -> existing // keep first if duplicates
                ));

        double totalStayDays = 0;
        double totalRevenue = 0;
        int validStays = 0;

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");

        for (Guest guest : allGuests) {
            try {
                if (guest.getCheckInDate() != null && guest.getCheckOutDate() != null
                        && !guest.getCheckInDate().isEmpty() && !guest.getCheckOutDate().isEmpty()) {
                    LocalDate checkIn = LocalDate.parse(guest.getCheckInDate(), formatter);
                    LocalDate checkOut = LocalDate.parse(guest.getCheckOutDate(), formatter);
                    long days = ChronoUnit.DAYS.between(checkIn, checkOut);
                    if (days > 0) {
                        totalStayDays += days;
                        validStays++;

                        // Calculate revenue based on room type price
                        Double pricePerNight = priceByType.getOrDefault(guest.getRoomType(), 0.0);
                        totalRevenue += pricePerNight * days;
                    }
                }
            } catch (Exception e) {
                // Skip guests with unparseable dates
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
                .totalRevenue(Math.round(totalRevenue * 100.0) / 100.0)
                .occupancyRate(Math.round(occupancyRate * 10.0) / 10.0)
                .build();
    }
}
