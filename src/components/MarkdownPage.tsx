import fs from 'node:fs/promises';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import * as styles from './MarkdownPage.css';

type MarkdownPageProps = {
  fileName: string;
};

export default async function MarkdownPage({ fileName }: MarkdownPageProps) {
  const markdown = await fs.readFile(`${process.cwd()}/src/content/${fileName}`, 'utf-8');

  return (
    <div className={styles.markdown}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => <h1 className={styles.heading1}>{children}</h1>,
          h2: ({ children }) => <h2 className={styles.heading2}>{children}</h2>,
          p: ({ children }) => <p className={styles.paragraph}>{children}</p>,
          a: ({ children, href }) => (
            <a href={href} className={styles.link}>
              {children}
            </a>
          ),
          ul: ({ children }) => <ul className={styles.list}>{children}</ul>,
          li: ({ children }) => <li className={styles.listItem}>{children}</li>,
          table: ({ children }) => (
            <div className={styles.tableWrapper}>
              <table className={styles.table}>{children}</table>
            </div>
          ),
          thead: ({ children }) => <thead className={styles.tableHead}>{children}</thead>,
          th: ({ children, style }) => (
            <th className={style?.textAlign === 'right' ? styles.tableHeaderCellAlignRight : styles.tableHeaderCell}>
              {children}
            </th>
          ),
          td: ({ children, style }) => (
            <td className={style?.textAlign === 'right' ? styles.tableCellAlignRight : styles.tableCell}>{children}</td>
          ),
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
