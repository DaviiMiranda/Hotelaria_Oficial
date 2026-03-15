# Hotel Overlook - Project Context

## Project Overview
Hotel Overlook is a full-stack luxury hotel management system. It features a modern administrative dashboard, guest registration with CPF lookup, room management, and a sophisticated visual theme utilizing Glassmorphism.

- **Architecture**: RESTful API Backend + Angular SPA Frontend.
- **Backend Stack**: Java 21, Spring Boot 3.5.6, Spring Data JPA, MySQL, Lombok.
- **Frontend Stack**: Angular 20 (as per `package.json`), TypeScript, Vanilla CSS, Bootstrap 5.3.8.
- **Visual Design**: Premium "Glassmorphism" aesthetic with a crimson/dark red color palette and backdrop-blur effects.

## Directory Structure
- `back_hotelaria/`: Java Spring Boot backend application.
- `front_hotelaria/`: Angular frontend application.
- `modelos/`: UI design samples and documentation images.
- `api_spring.session.sql`: SQL session file (likely for database exploration).

## Building and Running

### Backend (`back_hotelaria/`)
- **JDK**: 21+
- **Database**: MySQL 8.x
- **Build Tool**: Maven (`mvnw` wrapper included)
- **Commands**:
  - Run: `./mvnw spring-boot:run`
  - Test: `./mvnw test`
- **Configuration**:
  - `src/main/resources/application.properties` contains database credentials.
  - **Note**: The `README.md` suggests creating `hotelaria_db`, but `application.properties` is configured to use `hotelaria`. Verify the database name before running.

### Frontend (`front_hotelaria/`)
- **Node.js**: LTS version recommended.
- **Package Manager**: npm
- **CLI**: Angular CLI (`ng`)
- **Commands**:
  - Install dependencies: `npm install`
  - Run development server: `ng serve` (Available at `http://localhost:4200`)
  - Build: `ng build`
  - Test: `ng test`

## Development Conventions

### Backend
- **Layered Architecture**:
  - `controllers`: REST endpoints (base path `/api`).
  - `services`: Business logic.
  - `repositories`: Spring Data JPA interfaces.
  - `Models`: JPA Entity classes (Note: Directory is capitalized as `Models`).
  - `dto` & `mapper`: Data Transfer Objects and mapping logic (using custom mappers).
- **CORS**: Configured in `WebConfig.java` to allow `http://localhost:4200`.
- **Lombok**: Extensively used for boilerplate reduction (Getters, Setters, etc.).

### Frontend
- **Modular Design**:
  - `components/`: Reusable UI elements (header, footer, booking-bar, etc.).
  - `pages/`: Main application views.
  - `services/`: API communication layer using `HttpClient`.
- **Formatting**: Prettier is configured in `package.json`.
- **Design**: Emphasis on Vanilla CSS for the Glassmorphism effect rather than utility frameworks like Tailwind.

### Database
- **Schema Management**: Managed by Hibernate (`spring.jpa.hibernate.ddl-auto=update`).
- **SQL Scripts**: Reference `api_spring.session.sql` for manual queries.

## Key Files
- `back_hotelaria/pom.xml`: Backend dependencies and build configuration.
- `front_hotelaria/package.json`: Frontend dependencies and scripts.
- `back_hotelaria/src/main/resources/application.properties`: Primary backend configuration.
- `front_hotelaria/src/app/app.routes.ts`: Frontend routing definition.
