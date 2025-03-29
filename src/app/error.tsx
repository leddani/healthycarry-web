'use client';

import BlurFade from '@/components/magicui/blur-fade';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <BlurFade>
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">Oops!</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-8">Something went wrong</h2>
          <button
            onClick={() => reset()}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
          >
            Try again
          </button>
        </div>
      </BlurFade>
    </main>
  );
}