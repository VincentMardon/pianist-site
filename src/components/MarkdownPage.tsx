import fs from 'node:fs/promises';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type MarkdownPageProps = {
  fileName: string;
};

export default async function MarkdownPage({ fileName }: MarkdownPageProps) {
  const markdown = await fs.readFile(`${process.cwd()}/src/content/${fileName}`, 'utf-8');

  return <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>;
}
