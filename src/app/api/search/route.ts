import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';

// statically exported search index, searched in the browser
export const revalidate = false;
export const { staticGET: GET } = createFromSource(source);
