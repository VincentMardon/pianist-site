import { style } from '@vanilla-extract/css';

export const honeypot = style({
  position: 'absolute',
  left: '-9999px',
  width: '1px',
  overflow: 'hidden',
});
