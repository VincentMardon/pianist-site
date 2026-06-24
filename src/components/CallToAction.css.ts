import { style } from '@vanilla-extract/css';
import { semanticColors } from '@/styles/semanticColors.css';

export const container = style({
  width: '100%',
  marginTop: '3rem',
  paddingTop: '2rem',
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
