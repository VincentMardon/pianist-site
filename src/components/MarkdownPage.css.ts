import { style } from '@vanilla-extract/css';
import { semanticColors } from '@/styles/semanticColors.css';

export const markdown = style({
  width: '100%',
});

export const heading1 = style({
  marginTop: 0,
  marginBottom: '1.5rem',
});

export const heading2 = style({
  marginTop: '3rem',
  marginBottom: '1.5rem',
});

export const paragraph = style({
  marginTop: 0,
  marginBottom: '1.25rem',
});

export const link = style({
  color: semanticColors.actionPrimary,
  textDecoration: 'underline',
  textUnderlineOffset: '0.2rem',

  selectors: {
    '&:hover': {
      color: semanticColors.actionPrimaryLight,
    },
  },
});

export const list = style({
  marginTop: 0,
  marginBottom: '1.5rem',
  paddingLeft: '1.5rem',
});

export const listItem = style({
  marginBottom: '0.5rem',
});

export const tableWrapper = style({
  width: '100%',
  overflowX: 'auto',
  margin: '2rem 0',
});

export const table = style({
  width: '100%',
  borderCollapse: 'collapse',
});

export const tableHead = style({});

export const tableHeaderCell = style({
  padding: '0.75rem',
  textAlign: 'left',
  fontWeight: 500,
  color: semanticColors.actionPrimary,
  borderBottom: `1px solid ${semanticColors.actionPrimary}`,
});

export const tableHeaderCellAlignRight = style([
  tableHeaderCell,
  {
    textAlign: 'right',
  },
]);

export const tableCell = style({
  padding: '0.75rem',
  borderBottom: `1px solid ${semanticColors.actionPrimaryDark}`,
});

export const tableCellAlignRight = style([
  tableCell,
  {
    textAlign: 'right',
  },
]);
