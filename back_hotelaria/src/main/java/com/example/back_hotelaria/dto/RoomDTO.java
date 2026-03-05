package com.example.back_hotelaria.dto;
import lombok.Data;
import java.math.BigDecimal;

@Data
public class RoomDTO {
    private String roomNumber;
    private String type;
    private Boolean available;
    private BigDecimal price;
    
}
