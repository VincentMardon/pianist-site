import { style } from '@vanilla-extract/css';
import { semanticColors } from '@/styles/semanticColors.css';

export const header = style({
  maxWidth: '900px',
  margin: '0 auto',
  padding: '2rem',
});

export const nav = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.5rem',
});

export const link = style({
  color: semanticColors.textPrimary,
  textDecoration: 'none',

  selectors: {
    '&:hover': {
      color: semanticColors.actionPrimary,
    },
  },
});
