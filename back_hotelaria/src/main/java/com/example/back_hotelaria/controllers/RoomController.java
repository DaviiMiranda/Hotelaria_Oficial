package com.example.back_hotelaria.controllers;
import java.util.stream.Collectors;
import java.util.List;
import com.example.back_hotelaria.Models.Room;
import com.example.back_hotelaria.repositories.RoomRepository;
import com.example.back_hotelaria.mapper.RoomMapper;
import com.example.back_hotelaria.dto.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/rooms")
public class RoomController {

    @Autowired
    private RoomRepository roomRepository;

    @Autowired
    private RoomMapper roomMapper;
        
    // CREATE: Mapeia para POST /api/rooms

     // ENDPOINT PARA VERIFICAR DISPONIBILIDADE
    @GetMapping("/check-availability")
    public ResponseEntity<Boolean> checkRoomAvailability(@RequestParam String type) {
        // Usamos o repository para verificar se existe algum quarto do tipo `type` com `available = true`
        boolean isAvailable = roomRepository.existsByTypeAndAvailable(type, true);

        // Retornamos uma resposta HTTP 200 OK com o resultado (true ou false)
        return ResponseEntity.ok(isAvailable);
    }

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
