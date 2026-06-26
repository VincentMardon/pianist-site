import { style } from '@vanilla-extract/css';
import { semanticColors } from '@/styles/semanticColors.css';

export const header = style({
  position: 'sticky',
  top: 0,
  zIndex: 10,

  width: '100%',

  backgroundColor: semanticColors.backgroundPrimary,
  boxShadow: '0 0.55rem 1.4rem rgb(0 0 0 / 0.5)',
  borderBottom: '1px solid rgb(255 255 255 / 0.08)',
});

export const nav = style({
  maxWidth: '900px',
  margin: '0 auto',
  padding: '1.15rem 2.5rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '0.75rem 2.5rem',

  '@media': {
    '(max-width: 640px)': {
      justifyContent: 'flex-start',
      padding: '1rem 1.25rem 1.35rem',
      gap: '1.75rem',
    },

    '(max-width: 360px)': {
      padding: '0.95rem 1rem 1.25rem',
      gap: '1.15rem',
    },
  },
});

export const homeLink = style({
  width: '2.4rem',
  height: '2.4rem',

  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,

  color: semanticColors.textPrimary,
  textDecoration: 'none',
  fontFamily: 'var(--font-title), serif',
  fontSize: '1rem',
  fontWeight: 600,
  letterSpacing: '0.04em',

  border: '1px solid rgb(216 181 100 / 0.42)',
  borderRadius: '50%',
  backgroundColor: semanticColors.backgroundSurface,
  boxShadow: '0 0.35rem 0.9rem rgb(0 0 0 / 0.35)',
  transition: 'color 160ms ease, border-color 160ms ease, box-shadow 160ms ease',

  selectors: {
    '&:hover': {
      color: semanticColors.actionPrimary,
      borderColor: semanticColors.actionPrimary,
      boxShadow: '0 0.35rem 1rem rgb(216 181 100 / 0.18)',
    },
  },

  '@media': {
    '(max-width: 640px)': {
      width: '3.35rem',
      height: '3.35rem',
      fontSize: '1.25rem',
      lineHeight: 1,
      letterSpacing: '0.02em',
    },
  },
});

export const navigationLinks = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flex: 1,
  gap: '0.75rem 2.5rem',

  '@media': {
    '(max-width: 640px)': {
      display: 'grid',
      gridTemplateColumns: 'max-content max-content',
      justifyContent: 'space-between',
      alignItems: 'center',
      flex: '1',
      minWidth: 0,
      rowGap: '0.5rem',
    },

    '(max-width: 360px)': {
      rowGap: '0.45rem',
    },
  },
});

export const activeHomeLink = style({
  color: semanticColors.actionPrimary,
  borderColor: semanticColors.actionPrimary,
});

export const linkGroup = style({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  gap: '0.75rem 1.5rem',

  '@media': {
    '(max-width: 640px)': {
      display: 'contents',
    },
  },
});

export const actionGroup = style({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  justifyContent: 'flex-end',
  gap: '0.75rem 1.25rem',
  marginLeft: 'auto',

  '@media': {
    '(max-width: 640px)': {
      display: 'contents',
      marginLeft: 0,
    },
  },
});

export const link = style({
  color: semanticColors.textPrimary,
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  fontSize: '0.95rem',
  lineHeight: 1.2,
  transition: 'color 160ms ease',

  selectors: {
    '&:hover': {
      color: semanticColors.actionPrimary,
    },
  },

  '@media': {
    '(max-width: 640px)': {
      fontSize: '1rem',
      lineHeight: 1.25,
      padding: '0 0.05rem 0',
      width: 'max-content',
      justifySelf: 'start',
    },
  },
});

export const rightColumnLink = style({
  '@media': {
    '(max-width: 640px)': {
      justifySelf: 'end',
    },
  },
});

export const activeLink = style({
  color: semanticColors.actionPrimary,
  fontWeight: 500,
});

export const contactLink = style({
  position: 'relative',

  selectors: {
    '&::after': {
      content: '',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: '-0.25rem',
      height: '1px',
      backgroundColor: semanticColors.actionPrimary,
      opacity: 0.7,
    },

    '&:hover::after': {
      opacity: 1,
    },
  },
});
