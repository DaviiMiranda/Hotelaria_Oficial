package com.example.back_hotelaria.controllers;
import java.util.stream.Collectors;
import java.util.List;
import com.example.back_hotelaria.Models.Room;
import com.example.back_hotelaria.repositories.RoomRepository;
import com.example.back_hotelaria.mapper.RoomMapper;
import com.example.back_hotelaria.dto.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/rooms")
public class RoomController {

    @Autowired
    private RoomRepository roomRepository;

    @Autowired
    private RoomMapper roomMapper;
        
    // CREATE: Mapeia para POST /api/rooms
    @PostMapping
    public RoomResponseDTO createRoom(@RequestBody RoomDTO roomDTO) {
        Room room = roomMapper.toEntity(roomDTO);

        Room savedRoom = roomRepository.save(room);

        return roomMapper.toResponseDTO(savedRoom);
    }

    @GetMapping
    public List<RoomResponseDTO> getAllRooms(){
        List<Room> rooms = roomRepository.findAll();

        return rooms.stream()
        .map(roomMapper::toResponseDTO)
        .collect(Collectors.toList());
    }

    // UPDATE: Mapeia para PUT /api/rooms/{id}
    //@PutMapping("/{id}")
    // public Room updateRoom(@PathVariable Long id, @RequestBody Room roomDetails) {
    //     Room room = roomRepository.findById(id)
    //             .orElseThrow(() -> new RuntimeException("Quarto não encontrado com id: " + id));
    //     room.setRoomNumber(roomDetails.getRoomNumber());
    //     room.setType(roomDetails.getType());
    //     room.setPrice(roomDetails.getPrice());
    //     room.setAvailable(roomDetails.isAvailable());
    //     return roomRepository.save(room);
    // }


    // DELETE: Mapeia para DELETE /api/rooms/{id}
    // @DeleteMapping("/{id}")
    // public void deleteRoom(@PathVariable Long id) {
    //     roomRepository.deleteById(id);
    // }
}
