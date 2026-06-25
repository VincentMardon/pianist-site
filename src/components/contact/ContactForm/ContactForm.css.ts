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

export const fieldGroup = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.45rem',
});

export const label = style({
  fontSize: '0.9rem',
  fontWeight: 500,
  color: semanticColors.actionPrimary,
});

export const input = style({
  width: '100%',
  padding: '0.75rem 0.85rem',

  color: semanticColors.textPrimary,
  backgroundColor: semanticColors.backgroundPrimary,

  border: '1px solid rgb(255 255 255 / 0.12)',
  borderRadius: '0.65rem',

  font: 'inherit',
  fontSize: '0.95rem',
  lineHeight: 1.5,

  transition: 'border-color 160ms ease, box-shadow 160ms ease, background-color 160ms ease',

  selectors: {
    '&:focus': {
      outline: 'none',
      borderColor: semanticColors.actionPrimary,
      boxShadow: '0 0 0 3px rgb(216 181 100 / 0.18)',
    },
  },
});

export const textarea = style([
  input,
  {
    minHeight: '12rem',
    resize: 'vertical',
  },
]);

export const honeypot = style({
  position: 'absolute',
  left: '-9999px',
  width: '1px',
  overflow: 'hidden',
});

export const submitButton = style({
  alignSelf: 'flex-start',

  padding: '0.75rem 1.25rem',

  color: semanticColors.backgroundPrimary,
  backgroundColor: semanticColors.actionPrimary,

  border: 'none',
  borderRadius: '999px',

  font: 'inherit',
  fontSize: '0.95rem',
  fontWeight: 500,

  cursor: 'pointer',
  transition: 'transform 160ms ease, box-shadow 160ms ease, background-color 160ms ease',

  selectors: {
    '&:hover': {
      transform: 'translateY(-1px)',
      boxShadow: '0 0.5rem 1.2rem rgb(0 0 0 / 0.28)',
    },

    '&:focus-visible': {
      outline: `2px solid ${semanticColors.actionPrimary}`,
      outlineOffset: '0.25rem',
    },
  },
});
