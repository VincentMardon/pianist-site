import { style } from '@vanilla-extract/css';
import { semanticColors } from '@/styles/semanticColors.css';

export const footer = style({
  marginTop: '4rem',
  padding: '2rem 1rem',
  borderTop: `1px solid ${semanticColors.actionPrimaryDark}`,
  fontSize: '0.875rem',
});

export const nav = style({
  display: 'flex',
  justifyContent: 'center',
  gap: '1.5rem',
  flexWrap: 'wrap',
  marginBottom: '1rem',
});

export const link = style({
  color: semanticColors.actionPrimaryDark,
  textDecoration: 'none',
  fontWeight: 400,
  transition: 'opacity 160ms ease, text-decoration-color 160ms ease',

  selectors: {
    '&:hover': {
      textDecoration: 'underline',
      textUnderlineOffset: '0.25rem',
    },

    '&:focus-visible': {
      outline: `2px solid ${semanticColors.actionPrimaryDark}`,
      outlineOffset: '0.25rem',
      borderRadius: '0.25rem',
    },
  },
});

export const copyright = style({
  textAlign: 'center',
  margin: 0,
  opacity: 0.75,
});
