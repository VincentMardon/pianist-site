import { style } from '@vanilla-extract/css';
import { semanticColors } from '@/styles/semanticColors.css';

export const fallback = style({
  marginTop: '1.5rem',
  padding: '1rem 1.25rem',

  color: semanticColors.actionPrimaryDark,
  backgroundColor: semanticColors.backgroundSurface,

  border: '1px solid rgb(255 255 255 / 0.06)',
  borderRadius: '0.85rem',

  fontSize: '0.95rem',
  lineHeight: 1.65,
});

export const fallbackParagraph = style({
  marginTop: 0,
  marginBottom: '0.5rem',

  selectors: {
    '&:last-child': {
      marginBottom: 0,
    },
  },
});
