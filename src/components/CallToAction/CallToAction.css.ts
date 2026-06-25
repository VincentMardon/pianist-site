import { style } from '@vanilla-extract/css';
import { semanticColors } from '@/styles/semanticColors.css';

export const container = style({
  width: 'calc(100% + 4.5 rem)',
  margin: '3rem -2.25rem 0',
  padding: '1.75rem 2.25rem',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',

  backgroundColor: semanticColors.backgroundSurface,
  border: '1px solid rgb(216 181 100 / 0.22)',
  borderBottom: '1px solid rgb(216 181 100 / 0.22)',
  boxShadow: '0 0.75rem 1.75rem rgb(0 0 0 / 0.28)',

  '@media': {
    '(max-width: 640px)': {
      width: 'calc(100% + 2rem)',
      margin: '3rem -1rem 0',
      padding: '1.5rem 1rem',
    },
  },
});

export const title = style({
  marginTop: 0,
  marginBottom: '1rem',
  fontSize: '1.5rem',
});

export const text = style({
  marginTop: 0,
  marginBottom: '1.25rem',
});

export const links = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.75rem 1.25rem',
});

export const link = style({
  color: semanticColors.actionPrimary,
  textDecoration: 'underline',
  textUnderlineOffset: '0.2rem',

  selectors: {
    '&:hover': {
      color: semanticColors.actionPrimaryLight,
    },
  },
});
