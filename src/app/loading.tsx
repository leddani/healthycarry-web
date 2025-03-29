import BlurFade from '@/components/magicui/blur-fade';

export default function Loading() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <BlurFade>
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <h2 className="text-2xl font-semibold text-gray-700">Loading...</h2>
        </div>
      </BlurFade>
    </main>
  );
}