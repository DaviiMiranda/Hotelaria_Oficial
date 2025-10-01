
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
public class GuestController {

    @Autowired
    private GuestRepository guestRepository;

    @GetMapping
    public List<Guest> getAllGuests() {
        return guestRepository.findAll();
    }

    // CREATE: Mapeia para POST /api/guests
    @PostMapping
    public Guest createGuest(@RequestBody Guest guest) {
        return guestRepository.save(guest);
    }

    // UPDATE: Mapeia para PUT /api/guests/{id}
    @PutMapping("/{id}")
    public Guest updateGuest(@PathVariable Long id, @RequestBody Guest guestDetails) {
        Guest guest = guestRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Hóspede não encontrado com id: " + id));
        guest.setName(guestDetails.getName());
        guest.setEmail(guestDetails.getEmail());
        guest.setPhone(guestDetails.getPhone());
        guest.setCPF(guestDetails.getCPF());
        guest.setCheckInDate(guestDetails.getCheckInDate());
        guest.setCheckOutDate(guestDetails.getCheckOutDate());
        guest.setRoomNumber(guestDetails.getRoomNumber());
        return guestRepository.save(guest);
    }

    // DELETE: Mapeia para DELETE /api/guests/{id}
    @DeleteMapping("/{id}")
    public void deleteGuest(@PathVariable Long id) {
        guestRepository.deleteById(id);
    }
}