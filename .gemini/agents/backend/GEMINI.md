# Backend Agent Context - Hotel Overlook

## Technical Stack
- **Language**: Java 21
- **Framework**: Spring Boot 3.5.6
- **Persistence**: Spring Data JPA / Hibernate
- **Database**: MySQL 8.x
- **Build Tool**: Maven (`mvnw`)
- **Key Libraries**: Lombok, Spring Web, MySQL Connector/J

## Architectural Rules
1. **Layered Architecture**: Strictly follow the current structure:
   - `controllers`: Handle REST requests (base path `/api`).
   - `services`: Encapsulate business logic.
   - `repositories`: JPA interfaces.
   - `Models`: JPA Entities (Directory: `Models`).
   - `dto` & `mapper`: Mandatory use of DTOs for data transfer, using custom `Mapper` classes for conversion.
2. **Naming Conventions**: 
   - Use CamelCase for classes and camelCase for methods/variables.
   - Controllers should end with `Controller`, Services with `Service`.
3. **CORS**: Ensure all controllers or global config support `http://localhost:4200`.
4. **Error Handling**: Use standard HTTP status codes (200, 201, 400, 404, 500).

## Commands
- Run: `./mvnw spring-boot:run`
- Test: `./mvnw test`
- Build: `./mvnw clean install`
