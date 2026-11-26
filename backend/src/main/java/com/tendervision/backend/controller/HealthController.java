package com.tendervision.backend.controller;

import com.tendervision.backend.dto.HealthResponse;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/api/v1")
public class HealthController {

    @GetMapping("/health")
    public HealthResponse health() {
        return new HealthResponse(
            "TenderVision AI",
            "UP",
            "0.1.0"
        );
    }
}