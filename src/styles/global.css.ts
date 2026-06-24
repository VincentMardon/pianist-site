import { globalStyle } from '@vanilla-extract/css';
import { semanticColors } from './semanticColors.css';

/* ==================================
   Base
   ================================== */

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
});

globalStyle('html, body', {
  margin: 0,
  padding: 0,
  minHeight: '100vh',
  backgroundColor: semanticColors.backgroundPage,
  color: semanticColors.textPrimary,
});

globalStyle('body', {
  fontFamily: 'var(--font-body), system-ui, sans-serif',
  fontWeight: 300,
  lineHeight: 1.65,
  letterSpacing: '0.01em',
});

/* ==================================
   Layout
   ================================== */

globalStyle('main', {
  maxWidth: '900px',
  margin: '0 auto',
  padding: '2.25rem',

  backgroundColor: semanticColors.backgroundPrimary,
  borderLeft: '1px solid rgb(255 255 255 / 0.06)',
  borderRight: '1px solid rgb(255 255 255 / 0.06)',
  boxShadow: '0 1rem 2.5rem rgb(0 0 0 / 0.35)',

  '@media': {
    '(max-width: 960px)': {
      maxWidth: '100%',
      margin: 0,
    },

    '(max-width: 640px)': {
      padding: '1.5rem 1rem',
    },
  },
});

/* ==================================
   Typography
   ================================== */

globalStyle('h1, h2, h3', {
  fontFamily: 'var(--font-title), serif',
  fontWeight: 600,
  color: semanticColors.actionPrimary,
});

globalStyle('h1', {
  marginBottom: '1.5rem',
});

globalStyle('h2', {
  marginTop: '3rem',
  marginBottom: '1rem',
});

globalStyle('main a', {
  color: semanticColors.actionPrimary,
  textDecoration: 'underline',
  textUnderlineOffset: '0.2rem',
});

globalStyle('main a:hover', {
  color: semanticColors.actionPrimaryLight,
});
