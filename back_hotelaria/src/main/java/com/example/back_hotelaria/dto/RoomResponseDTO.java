package com.example.back_hotelaria.dto;
import lombok.Data;
import java.math.BigDecimal;

@Data
public class RoomResponseDTO {
    private String type;
    private String roomNumber;
    private Boolean available;
    private BigDecimal price;

    
}
