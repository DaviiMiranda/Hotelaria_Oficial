package com.example.back_hotelaria.mapper;
import com.example.back_hotelaria.dto.RoomDTO;
import com.example.back_hotelaria.Models.Room;
import com.example.back_hotelaria.dto.RoomResponseDTO;
import org.springframework.stereotype.Component;

@Component
public class RoomMapper {

    public Room toEntity(RoomDTO dto) {
        Room room = new Room();
        room.setRoomNumber(dto.getRoomNumber());
        room.setType(dto.getType());
        room.setPrice(dto.getPrice());
        room.setAvailable(dto.getAvailable());
        return room;
    }

    public RoomResponseDTO toResponseDTO(Room entity) {
        RoomResponseDTO dto = new RoomResponseDTO();
        dto.setRoomNumber(dto.getRoomNumber());
        dto.setType(dto.getType());
        dto.setAvailable(dto.getAvailable());
        return dto;
    }
    
}
