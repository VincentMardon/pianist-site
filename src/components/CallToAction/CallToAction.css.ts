import { style } from '@vanilla-extract/css';
import { semanticColors } from '@/styles/semanticColors.css';

export const container = style({
  width: '100%',
  marginTop: '2.5 rem',
  padding: '1.5rem',

  display: '1.5rem',
  flexDirection: 'column',
  alignItems: 'flex-start',

  backgroundColor: semanticColors.backgroundSurface,
  border: '1ps solid rgb(255 255 255 / 0.1)',
  borderRadius: '1rem',
  boxShadow: '0 0.75rem 1.8rem rgb(0 0 0 / 0.24), inset 0 1px 0 rgb(245 241 232 /0.04)',

  '@media': {
    '(max-width: 640px)': {
      marginTop: '2.25rem',
      padding: '1.25rem',
    },
  },
});

export const title = style({
  marginTop: 0,
  marginBottom: '0.85rem',
  fontSize: '1.5rem',
});

export const text = style({
  marginTop: 0,
  marginBottom: '1.25rem',
});

export const links = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.75rem',
});

export const link = style({
  display: 'inline-block',
  padding: '0.58rem 1.05rem',

  border: '1px solid rgb(255 255 255 / 0.1)',
  borderRadius: '1rem',

  fontSize: '0.9rem',
  fontWeight: 500,
  lineHeight: 1.2,
  textDecoration: 'none',

  boxShadow: '0 0.25rem 0.75rem rgb(0 0 0 / 0.18), inset 0 1px 0 rgb(245 241 232 / 0.04)',

  transition:
    'transform 140ms ease, color 140ms ease, border-color 140ms ease, background-color 140ms ease, box-shadow 140ms ease',

  selectors: {
    '&:hover': {
      color: semanticColors.actionPrimaryLight,
      borderColor: semanticColors.actionPrimaryLight,
      transform: 'translateY(-1px)',
      boxShadow:
        '0 0.6rem 1.35rem rgb(0 0 0 / 0.3), inset 0 0 1rem rgb(216 181 100 / 0.2), inset 0 1px 0 rgb(245 241 232 / 0.1)',
    },

    '&:active': {
      color: semanticColors.textPrimary,
      backgroundColor: semanticColors.actionPrimary,
      borderColor: semanticColors.actionPrimaryLight,
      transform: 'translateY(1px)',
      boxShadow:
        '0 0.16rem 0.4rem rgb(0 0 0 / 0.34), inset 0 0.1rem 0.28rem rgb(0 0 0 / 0.28), inset 0 1px 0 rgb(245 241 232 / 0.12)',
    },

    '&:focus-visible': {
      outline: `2px solid ${semanticColors.actionPrimary}`,
      outlineOffset: '0.25rem',
    },
  },
});
