import fs from 'node:fs';
import path from 'node:path';
import { basePath } from '@/lib/shared';

type AIImageProps = {
  /** path under public/, e.g. /images/ai/virtual-dom-diff.png */
  src: string;
  alt: string;
  /** prompt used to generate the image, shown while the file is missing */
  prompt: string;
  caption?: string;
};

/**
 * Renders an AI-generated illustration once its file exists in public/.
 * Until then it shows the prompt in development and nothing in production.
 */
export function AIImage({ src, alt, prompt, caption }: AIImageProps) {
  const exists = fs.existsSync(path.join(process.cwd(), 'public', src));

  if (exists) {
    return (
      <figure className="my-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${basePath}${src}`} alt={alt} loading="lazy" className="w-full rounded-xl border" />
        {caption && (
          <figcaption className="mt-2 text-center text-sm text-fd-muted-foreground">{caption}</figcaption>
        )}
      </figure>
    );
  }

  if (process.env.NODE_ENV === 'production') return null;

  return (
    <div className="my-6 rounded-xl border-2 border-dashed p-4 text-sm">
      <p className="mt-0 font-medium">
        🖼️ Image not generated yet: save it as <code>public{src}</code>
      </p>
      <details>
        <summary className="cursor-pointer">Show prompt</summary>
        <p className="whitespace-pre-wrap text-fd-muted-foreground">{prompt}</p>
      </details>
    </div>
  );
}
