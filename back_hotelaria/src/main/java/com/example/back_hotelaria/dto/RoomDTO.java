package com.example.back_hotelaria.dto;
import lombok.Data;

@Data
public class RoomDTO {
    private String roomNumber;
    private String type;
    private Boolean available;
    private double price;
    
}
