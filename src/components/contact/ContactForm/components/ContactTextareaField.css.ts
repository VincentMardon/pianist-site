import { style } from '@vanilla-extract/css';
import { semanticColors } from '@/styles/semanticColors.css';
import { input } from './ContactField.css';

export const textarea = style([
  input,
  {
    minHeight: '12rem',
    resize: 'none',
  },
]);

export const textareaFrame = style({
  position: 'relative',
  color: 'rgb(245 241 232 / 0.28)',

  selectors: {
    '&:focus-within': {
      color: semanticColors.actionPrimaryLight,
    },

    '&::after': {
      content: '',
      position: 'absolute',
      right: '0.55rem',
      bottom: '1.1rem',

      width: '0.55rem',
      height: '0.55rem',

      backgroundColor: 'currentColor',
      clipPath: 'polygon(100% 0, 0 100%, 100% 100%)',
      opacity: 0.8,

      pointerEvents: 'none',
    },
  },
});

export const textareaFrameValid = style({
  color: semanticColors.success,

  selectors: {
    '&:focus-within': {
      color: semanticColors.successLight,
    },
  },
});

export const textareaFrameInvalid = style({
  color: semanticColors.danger,

  selectors: {
    '&:focus-within': {
      color: semanticColors.dangerLight,
    },
  },
});
