
package com.example.back_hotelaria.controllers;

// TODOS ESTES IMPORTS ESTAVAM FALTANDO
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List; // Import para a classe List

// Imports para suas classes, agora nos pacotes corretos

import com.example.back_hotelaria.repositories.GuestRepository;
import com.example.back_hotelaria.Models.Guest;

@RestController
@RequestMapping("/api/guests")
@CrossOrigin(origins = "http://localhost:4200")
public class GuestController {

    @Autowired
    private GuestRepository guestRepository;

    @GetMapping
    public List<Guest> getAllGuests() {
        return guestRepository.findAll();
    }

    // Faltava implementar os outros métodos também, adicionei como no exemplo original
    
    // CREATE: Mapeia para POST /api/tasks
    @PostMapping
    public Guest createGuest(@RequestBody Guest guest) {
        return guestRepository.save(guest);
    }

    // UPDATE: Mapeia para PUT /api/tasks/{id}
    @PutMapping("/{id}")
    public Guest updateGuest(@PathVariable Long id, @RequestBody Guest guestDetails) {
        Guest guest = guestRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Hóspede não encontrado com id: " + id));
        guest.setName(guestDetails.getName());
        guest.setEmail(guestDetails.getEmail());
        return guestRepository.save(guest);
    }

    // DELETE: Mapeia para DELETE /api/tasks/{id}
    @DeleteMapping("/{id}")
    public void deleteGuest(@PathVariable Long id) {
        guestRepository.deleteById(id);
    }
}