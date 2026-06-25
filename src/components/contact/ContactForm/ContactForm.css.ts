import { style } from '@vanilla-extract/css';
import { semanticColors } from '@/styles/semanticColors.css';

export const form = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.25rem',

  marginTop: '2rem',
  padding: '1.5rem',

  backgroundColor: semanticColors.backgroundSurface,
  border: '1px solid rgb(255 255 255 / 0.08)',
  borderRadius: '1rem',
  boxShadow: '0 0.75rem 1.8rem rgb(0 0 0 / 0.22)',
});

export const honeypot = style({
  position: 'absolute',
  left: '-9999px',
  width: '1px',
  overflow: 'hidden',
});
