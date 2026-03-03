package com.example.back_hotelaria.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class DashboardDTO {
    private long totalRooms;
    private long availableRooms;
    private long occupiedRooms;
    private long totalGuests;
    private double averageStayDays;
    private double totalRevenue;
    private double occupancyRate;
}
