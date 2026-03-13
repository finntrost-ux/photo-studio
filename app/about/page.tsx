export default function AboutPage() {
  return (
    <div className="max-w-2xl space-y-4">
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
        About
      </h1>
      <p className="text-base leading-7 text-zinc-600 dark:text-zinc-300">
        Comfort Studios is a minimal photo journal by Finn Trost—focused on
        quiet moments, strong light, and honest portraits.
      </p>
      <div className="rounded-2xl border border-black/5 bg-white p-5 text-sm text-zinc-600 dark:border-white/10 dark:bg-black dark:text-zinc-300">
        <p className="font-medium text-zinc-950 dark:text-zinc-50">
          What I shoot
        </p>
        <ul className="mt-3 space-y-1">
          <li>Portraits · Editorial</li>
          <li>Travel · Documentary</li>
          <li>Street · Lifestyle</li>
        </ul>
      </div>
    </div>
  );
}

