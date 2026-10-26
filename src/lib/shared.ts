import { createGetUrl } from 'fumadocs-core/source';

export const appName = 'React Docs';
export const docsRoute = '/docs';
export const docsImageRoute = '/og/docs';
export const docsContentRoute = '/llms.mdx/docs';

// set by the GitHub Pages workflow (e.g. "/react"); empty for local dev and root-domain hosting.
// Next.js adds it to <Link> and static imports, but plain URLs (fetch, <img>, metadata) need it manually.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export const gitConfig = {
  user: 'SumanAdithan',
  repo: 'react',
  branch: 'master',
};

const getContentUrl = createGetUrl(`${basePath}${docsContentRoute}`);

export function getPageMarkdownUrl(page: { slugs: string[]; locale?: string }) {
  const segments = [...page.slugs, 'content.md'];

  return { segments, url: getContentUrl(segments, page.locale) };
}

const getImageUrl = createGetUrl(`${basePath}${docsImageRoute}`);

export function getPageImageUrl(page: { slugs: string[]; locale?: string }) {
  const segments = [...page.slugs, 'image.png'];

  return { segments, url: getImageUrl(segments, page.locale) };
}
