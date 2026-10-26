import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center text-center flex-1 px-4">
      <h1 className="text-3xl font-bold mb-4">React Docs</h1>
      <p className="text-fd-muted-foreground max-w-xl mx-auto mb-6">
        Personal React handbook: fundamentals, hooks, routing, data fetching, state management,
        testing and tooling, with runnable examples.
      </p>
      <p>
        <Link
          href="/docs"
          className="inline-block rounded-md bg-fd-primary px-4 py-2 font-medium text-fd-primary-foreground"
        >
          Start reading
        </Link>
      </p>
    </div>
  );
}
