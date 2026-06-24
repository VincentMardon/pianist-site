import { style } from '@vanilla-extract/css';
import { semanticColors } from '@/styles/semanticColors.css';

export const header = style({
  position: 'sticky',
  top: 0,
  zIndex: 10,

  width: '100%',

  backgroundColor: semanticColors.backgroundPrimary,
  boxShadow: '0 0.25rem 0.75rem rgb(255 255 255 / 0.05)',
  borderBottom: '1px solid rgb(255 255 255 /0.08)',
});

export const nav = style({
  maxWidth: '900px',
  margin: '0 auto',
  padding: '1.25rem 2rem 1rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '0.75rem 1.5rem',

  '@media': {
    '(max-width: 640px)': {
      padding: '1rem 1rem 0.8rem',
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
  transition: 'color 160ms ease',

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

export const activeLink = style({
  color: semanticColors.actionPrimary,
  fontWeight: 500,
});
