import Link from 'next/link';
import BlurFade from '@/components/magicui/blur-fade';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <BlurFade>
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-8">Page Not Found</h2>
          <Link 
            href="/"
            className="text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            Return Home
          </Link>
        </div>
      </BlurFade>
    </main>
  );
}