import { globalStyle } from '@vanilla-extract/css';
import { semanticColors } from './semanticColors.css';

globalStyle('html, body', {
  margin: 0,
  padding: 0,
  minHeight: '100vh',
  backgroundColor: semanticColors.backgroundPrimary,
  color: semanticColors.textPrimary,
});

globalStyle('body', {
  fontFamily: 'system-ui, sans-serif',
  lineHeight: 1.6,
});

globalStyle('main', {
  maxWidth: '900px',
  margin: '0 auto',
  padding: '2rem',
});

globalStyle('h1', {
  marginBottom: '1.5rem',
});

globalStyle('h2', {
  marginTop: '3rem',
  marginBottom: '1rem',
});

globalStyle('h1, h2, a', {
  color: semanticColors.actionPrimary,
});
