
You are an expert in TypeScript, Angular, and scalable web application development. You write functional, maintainable, performant, and accessible code following Angular and TypeScript best practices.

## TypeScript Best Practices

- Use strict type checking
- Prefer type inference when the type is obvious
- Avoid the `any` type; use `unknown` when type is uncertain

## Angular Best Practices

- Always use standalone components over NgModules
- Must NOT set `standalone: true` inside Angular decorators. It's the default in Angular v20+.
- Use signals for state management
- Implement lazy loading for feature routes
- Do NOT use the `@HostBinding` and `@HostListener` decorators. Put host bindings inside the `host` object of the `@Component` or `@Directive` decorator instead
- Use `NgOptimizedImage` for all static images.
  - `NgOptimizedImage` does not work for inline base64 images.

## Accessibility Requirements

- It MUST pass all AXE checks.
- It MUST follow all WCAG AA minimums, including focus management, color contrast, and ARIA attributes.

### Components

- Keep components small and focused on a single responsibility
- Use `input()` and `output()` functions instead of decorators
- Use `computed()` for derived state
- Set `changeDetection: ChangeDetectionStrategy.OnPush` in `@Component` decorator
- Prefer inline templates for small components
- Prefer Reactive forms instead of Template-driven ones
- Do NOT use `ngClass`, use `class` bindings instead
- Do NOT use `ngStyle`, use `style` bindings instead
- When using external templates/styles, use paths relative to the component TS file.

## State Management

- Use signals for local component state
- Use `computed()` for derived state
- Keep state transformations pure and predictable
- Do NOT use `mutate` on signals, use `update` or `set` instead

## Templates

- Keep templates simple and avoid complex logic
- Use native control flow (`@if`, `@for`, `@switch`) instead of `*ngIf`, `*ngFor`, `*ngSwitch`
- Use the async pipe to handle observables
- Do not assume globals like (`new Date()`) are available.

## Services

- Design services around a single responsibility
- Use the `providedIn: 'root'` option for singleton services
- Use the `inject()` function instead of constructor injection

## Project Specific Conventions - Panini Album 2026

### Design & Styling
- **Minimalism**: Adhere to a strict minimalist aesthetic. No shadows, gradients, or complex animations.
- **Tailwind CSS**: Use utility classes exclusively. Avoid custom CSS/SCSS files for components.
- **Typography**: Use `font-mono` (IBM Plex Mono) for all text. Jerarchy should be defined by size and weight (`text-xs` to `text-4xl`).
- **Colors**: Use the defined palette in `tailwind.config.ts` (`bg`, `surface`, `ink`, `muted`, `border`, `success`).

### State & Logic
- **Signals**: Use Angular Signals for all reactive state.
- **AlbumService**: Centralize all sticker logic and persistence in `AlbumService`.
- **SSR Safety**: Always check `isPlatformBrowser` before accessing `localStorage` or other browser-only APIs.
- **Performance**: Use `ChangeDetectionStrategy.OnPush` and `@for` with `track` in templates.

### Data Model
- Stickers must follow the `Sticker` interface in `src/app/models/sticker.model.ts`.
- Use `Record<string, ...>` for efficient sticker state mapping in `UserAlbum`.

## Documentation & Vault Integration

- **Location**: `../../album-project/`
- **Mandate**: All documentation within the Obsidian vault (wiki, README, etc.) MUST be in **English**.
- **Process**: After implementing features or changing architecture, update:
  - `wiki/log.md`: Chronological log of changes.
  - `wiki/front-architecture.md`: Frontend technical details.
  - `wiki/front-overview.md`: High-level summary.
