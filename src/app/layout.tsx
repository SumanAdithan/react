import { RootProvider } from 'fumadocs-ui/provider/next';
import type { Metadata } from 'next';
import './global.css';
import { Inter } from 'next/font/google';
import SearchDialog from '@/components/search';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  // absolute origin for Open Graph images, set by the GitHub Pages workflow
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider search={{ SearchDialog }}>{children}</RootProvider>
      </body>
    </html>
  );
}
