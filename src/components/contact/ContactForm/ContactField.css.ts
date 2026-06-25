import { style } from '@vanilla-extract/css';
import { semanticColors } from '@/styles/semanticColors.css';

export const fieldGroup = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.45rem',
});

export const fieldGroupValid = style({});

export const fieldGroupInvalid = style({});

export const label = style({
  fontSize: '0.9rem',
  fontWeight: 500,
  color: semanticColors.textPrimary,

  transition: 'color 160ms ease, text-shadow 160ms ease',

  selectors: {
    [`${fieldGroup}:focus-within &`]: {
      color: semanticColors.actionPrimaryLight,
      textShadow: '0 0 0.65rem rgb(216 181 100 / 0.22)',
    },

    [`${fieldGroupValid}:focus-within &`]: {
      color: semanticColors.successLight,
      textShadow: '0 0 0.65rem rgb(50 181 18 / 0.24)',
    },

    [`${fieldGroupInvalid}:focus-within &`]: {
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

    '&:focus': {
      outline: 'none',
      borderColor: semanticColors.actionPrimaryLight,
      boxShadow:
        '0 0.45rem 1rem rgb(0 0 0 / 0.26), 0 0 1rem rgb(216 181 100 / 0.22), inset 0 1px 0 rgb(245 241 232 / 0.14)',
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

export const inputValid = style({
  borderColor: semanticColors.success,
  boxShadow: 'inset 0 1px 0 rgb(245 241 232 / 0.08)',

  selectors: {
    '&:focus': {
      borderColor: semanticColors.successLight,
      boxShadow:
        '0 0.45rem 1rem rgb(0 0 0 / 0.26), 0 0 1rem rgb(50 181 18 / 0.24), inset 0 1px 0 rgb(245 241 232 / 0.14)',
    },

    '&:-webkit-autofill': {
      WebkitTextFillColor: semanticColors.textPrimary,
      caretColor: semanticColors.textPrimary,
      borderColor: semanticColors.success,
      boxShadow: '0 0 0 1000px rgb(32 32 32) inset, inset 0 1px 0 rgb(245 241 232 / 0.08)',
      transition: 'background-color 9999s ease-ini-out os',
    },

    '&:-webkit-autofill:focus': {
      WebkitTextFillColor: semanticColors.textPrimary,
      caretColor: semanticColors.textPrimary,
      borderColor: semanticColors.successLight,
      boxShadow:
        '0 0 0 1000px rgb(32 32 32) inset, 0 0.45rem 1rem rgb(0 0 0 / 0.26), 0 0 1rem rgb(50 181 18 / 0.24), inset 0 1px 0 rgb(245 241 232 / 0.14)',
    },
  },
});

export const inputInvalid = style({
  borderColor: semanticColors.danger,
  boxShadow: 'inset 0 1px 0 rgb(245 241 232 / 0.08)',

  selectors: {
    '&:focus': {
      borderColor: semanticColors.dangerLight,
      boxShadow:
        '0 0.45rem 1rem rgb(0 0 0 / 0.26), 0 0 1rem rgb(218 29 29 / 0.24), inset 0 1px 0 rgb(245 241 232 / 0.14)',
    },

    '&:-webkit-autofill': {
      WebkitTextFillColor: semanticColors.textPrimary,
      caretColor: semanticColors.textPrimary,
      borderColor: semanticColors.danger,
      boxShadow: '0 0 0 1000px rgb(32 32 32) inset, inset 0 1px 0 rgb(245 241 232 / 0.08)',
      transition: 'background-color 9999s ease-in-out 0s',
    },

    '&:-webkit-autofill:focus': {
      WebkitTextFillColor: semanticColors.textPrimary,
      caretColor: semanticColors.textPrimary,
      borderColor: semanticColors.dangerLight,
      boxShadow:
        '0 0 0 1000px rgb(32 32 32) inset, 0 0.45rem 1rem rgb(0 0 0 / 0.26), 0 0 1rem rgb(218 29 29 / 0.24), inset 0 1px 0 rgb(245 241 232 / 0.14)',
    },
  },
});

export const fieldError = style({
  marginTop: '-0.1rem',
  marginBottom: 0,

  color: semanticColors.dangerLight,

  fontSize: '0.85rem',
  lineHeight: 1.45,

  textShadow: '0 0 0.5rem rgb(218 29 29 / 0.16)',
});
