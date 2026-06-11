import fs from 'node:fs/promises';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import HomeContent from '@/components/HomeContent';

const pages = {
  home: 'home.md',
  presentation: 'presentation.md',
  tarifs: 'tarifs.md',
} as const;

type PageKey = keyof typeof pages;

type HomePageProps = {
  searchParams?: Promise<{
    page?: string;
  }>;
};

export default async function HomePage({ searchParams }: HomePageProps) {
  const params = await searchParams;
  const requestedPage = params?.page;

  const currentPage: PageKey = requestedPage === 'presentation' || requestedPage === 'tarifs' ? requestedPage : 'home';

  const markdown = await fs.readFile(`${process.cwd()}/src/content/${pages[currentPage]}`, 'utf-8');

  const isMarkdownPage = currentPage !== 'home';

  return (
    <div>
      <header>
        <nav>
          <Link href="/?page=home">Accueil</Link>
          <Link href="/?page=presentation">Présentation</Link>
          <Link href="/?page=tarifs">Tarifs</Link>
        </nav>
      </header>

      <main>
        {isMarkdownPage ? <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown> : <HomeContent />}
      </main>
    </div>
  );
}
