import { style } from '@vanilla-extract/css';
import { semanticColors } from '@/styles/semanticColors.css';

export const header = style({
  position: 'sticky',
  top: 0,
  zIndex: 10,

  maxWidth: '900px',
  margin: '0 auto',
  padding: '1rem 2rem',

  backgroundColor: semanticColors.backgroundPrimary,

  '@media': {
    '(max-width: 640px)': {
      padding: '0.75rem 1rem',
    },
  },
});

export const nav = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '0.75rem 1.5rem',

  '@media': {
    '(max-width: 640px)': {
      gap: '0.5rem 0.9rem',
    },
  },
});

export const link = style({
  color: semanticColors.textPrimary,
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  fontSize: '0.95rem',
  lineHeight: 1.2,

  selectors: {
    '&:hover': {
      color: semanticColors.actionPrimary,
    },
  },

  '@media': {
    '(max-width: 640px)': {
      fontSize: '0.9rem',
    },
  },
});
