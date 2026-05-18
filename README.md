# Panini World Cup 2026 Album Tracker

A minimalist, high-performance web application to track your 2026 Panini World Cup sticker collection.

## Technical Stack

- **Framework**: Angular 17+ (Standalone Components)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS v3+ (Minimalist, Utility-first)
- **State Management**: Angular Signals
- **Persistence**: LocalStorage (with SSR safety)
- **SSR/SSR**: Angular SSR enabled

## Features

- **User Management**: Simple username-based sessions stored locally.
- **Sticker Collection**: Track owned stickers, missing ones, and duplicates. Enhanced UI with status labels (Missing, Owned, Duplicate) and outlined design.
- **Advanced Filtering**: Filter by name, number, section, or status (Owned, Missing, Duplicates).
- **Team-Centric View**: Stickers are organized in a two-level hierarchy: **Tournament Groups** (e.g., Group A, Group B) and **Teams**.
- **Collapsible UI**: All Groups and Teams are independently collapsible with smooth, fluid transitions.
- **Bulk Collapse Controls**: Dedicated actions in the filter bar to expand/collapse only Groups or the entire hierarchy at once.
- **Progress Tracking**: Real-time progress bar and metrics (Total, Owned, Missing, Duplicates).
- **Export/Import**: Backup or share your album state via JSON.
- **Responsive Design**: Optimized for mobile and desktop using a minimalist "ink-on-paper" aesthetic.

## Data Standards

Every team in the application follows a strict structural standard to ensure consistency across the 48 sections:

- **20 Stickers per Team**: Consistent size for all participants.
- **Federation Logo (#1)**: Always typed as `escudo` and displayed first in the grid.
- **Team Picture (#13)**: Always typed as `intro` and displayed second in the grid.
- **Players**: All other stickers are typed as `jugador` and ordered numerically.
- **Hierarchical Organization**: Teams are grouped under their respective Tournament Group (Group A through Group L).

## Architecture

- **Surgical State**: All state transformations are handled via `AlbumService` using Signals, including persistent collapse states.
- **Hybrid Framework**: Angular handles routing and services, while **React (v19)** powers the entire UI layer for high performance and smooth animations.
- **Modular Pages**:
  - `Home`: User login/selection.
  - `Album`: Main collection grid with filters.
  - `Section`: Focused view for specific sections (Teams, Stadiums, etc.).
  - `Profile`: Data management and duplicate listing.
- **Clean Components**: OnPush change detection and pure logic.

## Getting Started

### Prerequisites

- **Node.js**: Latest LTS recommended.
- **pnpm**: Used exclusively for package management.
- **Docker & Docker Compose**: Required for production-like deployment (SSR/SSG).
- **Make**: (Optional) Recommended for running automated tasks.

### Development

For local development with hot-reloading:

```bash
pnpm install
make dev
# or
pnpm start
```

### Deployment

The project supports both **Server-Side Rendering (SSR)** and **Static Site Generation (SSG)** through a load-balanced Docker environment.

#### SSR Deployment (Server-Side Rendering)

Optimized for dynamic content and real-time state consistency.

```bash
make prod-ssr
```
The application will be available at `http://localhost:8080`.

#### SSG Deployment (Static Site Generation)

Optimized for high-performance static delivery.

```bash
make prod-ssg
```
The application will be available at `http://localhost:8080`.

#### Management

```bash
# View environment logs
make logs-ssr
make logs-ssg

# Stop all running environments
make stop

# Clean up all containers and images
make clean
```

## Design Philosophy

- **Minimalist**: No gradients, shadows, or decorative animations.
- **Typography-centric**: Using IBM Plex Mono for a technical, "ledger-like" feel.
- **Interaction**: Fast, tactical feedback via simple color/opacity changes.
