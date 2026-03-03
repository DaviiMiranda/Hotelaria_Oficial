package com.example.back_hotelaria.controllers;

import com.example.back_hotelaria.dto.DashboardDTO;
import com.example.back_hotelaria.services.DashboardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/dashboard")
public class DashboardController {

    @Autowired
    private DashboardService dashboardService;

    @GetMapping("/stats")
    public DashboardDTO getStats() {
        return dashboardService.getStats();
    }
}
