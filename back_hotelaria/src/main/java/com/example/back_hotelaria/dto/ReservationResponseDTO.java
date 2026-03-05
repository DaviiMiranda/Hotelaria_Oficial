package com.example.back_hotelaria.dto;

import lombok.Data;
import java.math.BigDecimal;
import java.time.LocalDate;

@Data
public class ReservationResponseDTO {
    private Long id;
    private Long guestId;
    private Long roomId;
    private String guestName;
    private String roomNumber;
    private LocalDate checkInDate;
    private LocalDate checkOutDate;
    private String status;
    private BigDecimal totalValue;
}
