# Frontend Agent Context - Hotel Overlook

## Technical Stack
- **Framework**: Angular 20
- **Language**: TypeScript
- **Styling**: Vanilla CSS (Priority over utility frameworks), Bootstrap 5.3.8 (for layout)
- **State Management**: RxJS (Observables)
- **API Communication**: Angular `HttpClient`

## UI/UX Standards: Glassmorphism
1. **Design Reference**: **CRITICAL: Always strictly follow the visual design and layout provided in the `modelos/cliente/` directory.** This folder contains the source of truth for the expected UI/UX appearance.
2. **Visual Style**: Crimson/Dark Red palette with translucent panels.
3. **CSS Rules**: 
   - Extensive use of `backdrop-filter: blur(px)`.
   - Semi-transparent backgrounds (`rgba(..., 0.x)`).
   - Subtle borders for "glass" edges.
4. **Typography**: `Playfair Display` for headings, `Montserrat` for body text.

## Architectural Rules
1. **Services**: All API calls must reside in `src/app/services/`.
2. **Components**: Split UI into small, reusable components in `src/app/components/`.
3. **Routing**: Define all paths in `app.routes.ts`.
4. **Forms**: Prefer Angular **Reactive Forms** for complex registrations (like the guest registration flow).

## Commands
- Run: `ng serve`
- Build: `ng build`
- Test: `ng test`
- Lint: `ng lint` (if configured)
