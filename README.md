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
- **Sticker Collection**: Track owned stickers, missing ones, and duplicates.
- **Advanced Filtering**: Filter by name, number, section, or status (Owned, Missing, Duplicates).
- **Progress Tracking**: Real-time progress bar and metrics (Total, Owned, Missing, Duplicates).
- **Export/Import**: Backup or share your album state via JSON.
- **Responsive Design**: Optimized for mobile and desktop using a minimalist "ink-on-paper" aesthetic.

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
