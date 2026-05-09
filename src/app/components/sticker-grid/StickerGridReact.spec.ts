import { render, screen, fireEvent } from '@testing-library/react';
import { expect, it, describe, vi } from 'vitest';
import { StickerGridReact } from './StickerGridReact';
import { createElement } from 'react';
import { Sticker } from '../../models/sticker.model';
import '@testing-library/jest-dom';

describe('StickerGridReact', () => {
  const stickers: Sticker[] = [
    { id: 'ARG1', name: 'Messi', number: 10, section: 'Argentina', group: 'A', type: 'player', owned: false, duplicates: 0 },
    { id: 'BRA1', name: 'Neymar', number: 10, section: 'Brazil', group: 'B', type: 'player', owned: true, duplicates: 1 }
  ];

  it('should render grouped stickers', () => {
    render(
      createElement(StickerGridReact, {
        stickers,
        collapsedSections: new Set<string>(),
        collapsedGroups: new Set<string>(),
        onToggleSection: () => {},
        onToggleGroup: () => {},
        onToggled: () => {},
        onRepeatChanged: () => {}
      })
    );

    expect(screen.getByText('GROUP A')).toBeInTheDocument();
    expect(screen.getByText('GROUP B')).toBeInTheDocument();
    
    // Multiple 'Argentina' and 'Brazil' (header and card)
    expect(screen.getAllByText('Argentina').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Brazil').length).toBeGreaterThan(0);
    
    expect(screen.getByText('Messi')).toBeInTheDocument();
    expect(screen.getByText('Neymar')).toBeInTheDocument();
  });

  it('should call onToggleGroup when group header is clicked', () => {
    const onToggleGroup = vi.fn();
    render(
      createElement(StickerGridReact, {
        stickers,
        collapsedSections: new Set<string>(),
        collapsedGroups: new Set<string>(),
        onToggleSection: () => {},
        onToggleGroup,
        onToggled: () => {},
        onRepeatChanged: () => {}
      })
    );

    fireEvent.click(screen.getByText('GROUP A'));
    expect(onToggleGroup).toHaveBeenCalledWith('A');
  });

  it('should render "No stickers found" message when list is empty', () => {
    render(
      createElement(StickerGridReact, {
        stickers: [],
        collapsedSections: new Set<string>(),
        collapsedGroups: new Set<string>(),
        onToggleSection: () => {},
        onToggleGroup: () => {},
        onToggled: () => {},
        onRepeatChanged: () => {}
      })
    );

    expect(screen.getByText(/No stickers found/i)).toBeInTheDocument();
  });
});
