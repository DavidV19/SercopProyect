# ADR-0001: Initial System Architecture

## Status

Proposed

## Context

TenderVision AI is an enterprise web application
designed to support public procurement document
analysis in Ecuador.

The system requires document management,
user authentication, artificial intelligence
integration and traceability.

## Decision

The initial system will use:

- Angular for the frontend.
- Spring Boot for business logic.
- PostgreSQL for data persistence.
- Python and FastAPI for AI integration.
- Ollama for local LLM inference.
- A monorepo for source code management.

The backend will follow a modular monolith
architecture, with an independent AI service.

## Consequences

### Positive

- Separation of responsibilities.
- Independent AI integration.
- Reduced initial infrastructure complexity.
- Improved maintainability.

### Negative

- Multiple programming languages.
- Integration between Java and Python.
- Additional service communication requirements.