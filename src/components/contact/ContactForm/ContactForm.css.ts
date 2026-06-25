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
  color: semanticColors.textPrimary,

  transition: 'color 160ms ease, text-shadow 160ms ease',

  selectors: {
    /**
     * Neutral focus
     */
    [`${fieldGroup}:focus-within &`]: {
      color: semanticColors.actionPrimaryLight,
      textShadow: '0 0 0.65rem rgb(216 181 100 / 0.22)',
    },

    /**
     * Valid unfocus
     */
    [`${fieldGroup}:has(:not(:placeholder-shown):valid) &`]: {
      color: semanticColors.success,
      textShadow: 'none',
    },

    /**
     * Valid focus
     */
    [`${fieldGroup}:has(:not(:placehorlder-shown):valid:focus) &`]: {
      color: semanticColors.successLight,
      textShadow: '0 0 0.65rem rgb(50 181 18 / 0.24)',
    },

    /**
     * Invalid unfocus
     */
    [`${fieldGroup}:has(:not(:placehoder-shown):invalid) &`]: {
      color: semanticColors.danger,
      textShadow: 'none',
    },

    /**
     * Invalid focus
     */
    [`${fieldGroup}:has(:not(:placeholder-shown):invalid:focus) &`]: {
      color: semanticColors.dangerLight,
      textShadow: '0 0 0.65rem rgb(218 29 29 / 0.24)',
    },
  },
});

export const input = style({
  width: '100%',
  padding: '0.75rem 0.85rem',

  color: semanticColors.textPrimary,
  backgroundColor: 'transparent',

  border: '1px solid rgb(245 241 232 / 0.28)',
  borderRadius: '0.95rem',

  font: 'inherit',
  fontSize: '0.95rem',
  lineHeight: 1.5,

  caretColor: semanticColors.textPrimary,
  boxShadow: 'inset 0 1px 0 rgb(245 241 232 / 0.05)',

  transition: 'border-color 160ms ease, box-shadow 160ms ease, background-color 160ms ease',

  selectors: {
    '&::placeholder': {
      color: 'rgb(245 241 232 / 0.42)',
    },

    /**
     * Neutral focus : Empty field or not already validated.
     */
    '&:focus': {
      outline: 'none',
      borderColor: semanticColors.actionPrimaryLight,
      boxShadow:
        '0 0.45rem 1rem rgb(0 0 0 / 0.26), 0 0 1rem rgb(216 181 100 / 0.22), inset 0 1px 0 rgb(245 241 232 / 0.14)',
    },

    /**
     * Valid unfocus: only color, not glow
     */
    '&:not(:placeholder-shown):valid': {
      borderColor: semanticColors.success,
      boxShadow: 'inset 0 1px 0 rgb(245 241 232 / 0.08)',
    },

    /**
     * Valid focus: Light green + green glow
     */
    '&:not(:placeholder-shown):valid:focus': {
      borderColor: semanticColors.successLight,
      boxShadow:
        '0 0.45rem 1rem rgb(0 0 0 / 0.26), 0 0 1rem rgb(50 181 18 / 0.24), inset 0 1px 0 rgb(245 241 232 / 0.14)',
    },

    /**
     * Invalid unfocus: Only color, not glow
     */
    '&:not(:placeholder-shown):invalid': {
      borderColor: semanticColors.danger,
      boxShadow: 'inset 0 1px 0 rgb(245 241 232 / 0.08)',
    },

    /**
     * Invalid focus: Light red + red glow
     */
    '&:not(:placeholder-shown):invalid:focus': {
      borderColor: semanticColors.dangerLight,
      boxShadow:
        '0 0.45rem 1rem rgb(0 0 0 / 0.26), 0 0 1rem rgb(218 29 29 / 0.24), inset 0 1px 0 rgb(245 241 232 / 0.14)',
    },

    '&:-webkit-autofill': {
      WebkitTextFillColor: semanticColors.textPrimary,
      caretColor: semanticColors.textPrimary,
      boxShadow: '0 0 0 1000px rgb(32 32 32) inset, inset 0 1px 0 rgb(245 241 232 / 0.1)',
      borderColor: 'rgb(245 241 232 / 0.28)',
      transition: 'background-color 9999s ease-in-out 0s',
    },

    '&:-webkit-autofill:focus': {
      WebkitTextFillColor: semanticColors.textPrimary,
      caretColor: semanticColors.textPrimary,
      borderColor: semanticColors.actionPrimaryLight,
      boxShadow:
        '0 0 0 1000px rgb(32 32 32) inset, 0 0.45rem 1rem rgb(0 0 0 / 0.26), 0 0 1rem rgb(216 181 100 / 0.22), inset 0 1px rgb(245 241 232 / 0.14)',
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
