package com.example.back_hotelaria.dto;
import lombok.Data;

@Data
public class RoomResponseDTO {
    private String type;
    private String roomNumber;
    private Boolean available;

    
}
