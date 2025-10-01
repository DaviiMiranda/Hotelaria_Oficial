package com.example.back_hotelaria.controllers;

import java.util.List;
import com.example.back_hotelaria.Models.Room;
import com.example.back_hotelaria.repositories.RoomRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/rooms")
public class RoomController {

    @Autowired
    private RoomRepository roomRepository;

    @GetMapping
    public List<Room> getAllRooms() {
        return roomRepository.findAll();
    }

    // Faltava implementar os outros métodos também, adicionei como no exemplo original
    
    // CREATE: Mapeia para POST /api/rooms
    @PostMapping
    public Room createRoom(@RequestBody Room room) {
        return roomRepository.save(room);
    }

    // UPDATE: Mapeia para PUT /api/rooms/{id}
    @PutMapping("/{id}")
    public Room updateRoom(@PathVariable Long id, @RequestBody Room roomDetails) {
        Room room = roomRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Quarto não encontrado com id: " + id));
        room.setNumber(roomDetails.getNumber());
        room.setType(roomDetails.getType());
        room.setPrice(roomDetails.getPrice());
        room.setAvailable(roomDetails.isAvailable());
        return roomRepository.save(room);
    }

    // DELETE: Mapeia para DELETE /api/rooms/{id}
    @DeleteMapping("/{id}")
    public void deleteRoom(@PathVariable Long id) {
        roomRepository.deleteById(id);
    }
}
