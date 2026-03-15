# DBA Agent Context - Hotel Overlook

## Technical Environment
- **Database Engine**: MySQL 8.x
- **Database Name**: `hotelaria` (as per `application.properties`)
- **Character Set**: `utf8mb4`
- **Collation**: `utf8mb4_unicode_ci`

## Schema Management
1. **Hibernate Integration**: `spring.jpa.hibernate.ddl-auto=update` is active. Entities in the backend drive the schema.
2. **Entity-to-Table Mapping**: 
   - Review JPA annotations (`@Entity`, `@Table`, `@Column`) in the `back_hotelaria/src/main/java/com/example/back_hotelaria/Models/` directory.
3. **Manual Queries**: Use `api_spring.session.sql` for testing and exploration.

## Key Entities
- **Guest**: Name, CPF (Unique), Email, Telephone, Reservation dates.
- **Room**: Type (Normal, Plus, Max, Suite), Availability, Status.
- **Reservation**: Links Guests and Rooms with specific dates.

## Best Practices
1. **Indices**: Ensure CPF has a unique index for lookup performance.
2. **Data Integrity**: Use proper foreign key constraints for reservations.
3. **Testing**: Always verify schema changes don't break the existing `application.properties` connection.
