import { style } from '@vanilla-extract/css';
import { semanticColors } from '@/styles/semanticColors.css';

export const contactSection = style({
  maxWidth: '720px',
});

export const header = style({
  marginBottom: '2rem',
});

export const introduction = style({
  maxWidth: '62ch',
  marginTop: 0,
  marginBottom: '0.75rem',
});

export const responseTime = style({
  marginTop: 0,
  marginBottom: 0,
  color: semanticColors.actionPrimaryDark,
});

export const successMessage = style({
  marginTop: '1.5rem',
  marginBottom: 0,
  padding: '0.9rem 1rem',

  color: semanticColors.successLight,
  backgroundColor: semanticColors.backgroundSurface,

  border: `1px solid ${semanticColors.successDark}`,
  borderRadius: '0.75rem',

  fontSize: '0.95rem',
  lineHeight: 1.5,
});

export const errorMessage = style({
  marginTop: '1.5rem',
  marginBottom: 0,
  padding: '0.9rem 1rem',

  color: semanticColors.dangerLight,
  backgroundColor: semanticColors.backgroundSurface,

  border: `1px solid ${semanticColors.dangerDark}`,
  borderRadius: '0.75rem',

  fontSize: '0.95rem',
  lineHeight: 1.5,
});
