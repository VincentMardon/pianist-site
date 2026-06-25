import { style } from '@vanilla-extract/css';
import { semanticColors } from '@/styles/semanticColors.css';

export const submitButton = style({
  alignSelf: 'flex-end',

  padding: '0.58rem 1.05rem',

  color: semanticColors.textPrimary,
  backgroundColor: 'transparent',

  border: `1px solid ${semanticColors.actionPrimary}`,
  borderRadius: '0.95rem',

  font: 'inherit',
  fontSize: '0.9rem',
  fontWeight: 500,
  lineHeight: 1.2,

  cursor: 'pointer',
  boxShadow: '0 0.25rem 0.75rem rgb(0 0 0 / 0.18), inset 0 1px 0 rgb(245 241 232 / 0.08)',

  transition:
    'transform 140ms ease, color 140ms ease, border-color 140ms ease, border-width 140ms ease, background-color 140ms ease, box-shadow 140ms ease',

  selectors: {
    '&:hover': {
      color: semanticColors.actionPrimaryLight,
      borderColor: semanticColors.actionPrimaryLight,
      borderWidth: '1.5px',
      transform: 'translateY(-1px)',
      boxShadow:
        '0 0.6rem 1.35rem rgb(0 0 0 / 0.34), 0 0 1rem rgb(216 181 100 / 0.26), inset 0 1px 0 rgb(245 241 232 / 0.16)',
    },

    '&:active': {
      color: semanticColors.textPrimary,
      backgroundColor: semanticColors.actionPrimary,
      borderColor: semanticColors.actionPrimaryLight,
      transform: 'translateY(1px)',
      boxShadow:
        '0 0.16rem 0.4rem rgb(0 0 0 / 0.36), inset 0 0.1rem 0.28rem rgb(0 0 0 / 0.3), inset 0 1px 0 rgb(245 241 232 / 0.14)',
    },

    '&:focus-visible': {
      outline: `2px solid ${semanticColors.actionPrimary}`,
      outlineOffset: '0.25rem',
    },
  },
});
