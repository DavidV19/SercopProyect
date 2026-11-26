package com.tendervision.backend.dto;

public record HealthResponse(
    String application,
    String status,
    String version
) {}