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
- **Team-Centric View**: Stickers are grouped by team, with Federation Logos and Team Pictures prioritized in the layout.
- **Progress Tracking**: Real-time progress bar and metrics (Total, Owned, Missing, Duplicates).
- **Export/Import**: Backup or share your album state via JSON.
- **Responsive Design**: Optimized for mobile and desktop using a minimalist "ink-on-paper" aesthetic.

## Data Standards

Every team in the application follows a strict structural standard to ensure consistency across the 48 sections:

- **20 Stickers per Team**: Consistent size for all participants.
- **Federation Logo (#1)**: Always typed as `escudo` and displayed first in the grid.
- **Team Picture (#13)**: Always typed as `intro` and displayed second in the grid.
- **Players**: All other stickers are typed as `jugador` and ordered numerically.
- **Group Organization**: Teams are ordered by tournament group (Group A through Group L).

## Architecture

- **Surgical State**: All state transformations are handled via `AlbumService` using Signals.
- **Modular Pages**:
  - `Home`: User login/selection.
  - `Album`: Main collection grid with filters.
  - `Section`: Focused view for specific sections (Teams, Stadiums, etc.).
  - `Profile`: Data management and duplicate listing.
- **Clean Components**: OnPush change detection and pure logic.

## Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- pnpm

### Development

```bash
pnpm install
pnpm dev
```

### Build

```bash
pnpm build
```

## Design Philosophy

- **Minimalist**: No gradients, shadows, or decorative animations.
- **Typography-centric**: Using IBM Plex Mono for a technical, "ledger-like" feel.
- **Interaction**: Fast, tactical feedback via simple color/opacity changes.
