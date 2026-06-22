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
  backgroundColor: semanticColors.backgroundPrimary,
  color: semanticColors.textPrimary,
});

globalStyle('body', {
  fontFamily: 'var(--font-body), system-ui, sans-serif',
  fontWeight: 300,
  lineHeight: 1.6,
});

/* ==================================
   Layout
   ================================== */

globalStyle('main', {
  maxWidth: '900px',
  margin: '0 auto',
  padding: '2rem',
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
