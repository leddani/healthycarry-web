import BlurFade from '@/components/magicui/blur-fade';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <BlurFade>
        <div className="flex items-center mb-8">
          <img
            src="/healthycarry-logo.svg"
            alt="HealthyCarry"
            className="w-12 h-12 mr-4"
          />
          <h1 className="text-4xl font-bold">Welcome to HealthyCarry</h1>
        </div>
        <p className="text-xl text-gray-600">Your Modern Healthcare Platform</p>
      </BlurFade>
      
      <section className="w-full max-w-5xl mt-16">
        <BlurFade delay={0.2}>
          <h2 className="text-2xl font-semibold mb-6">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-lg overflow-hidden shadow-lg bg-white">
              <div className="w-full h-48 bg-indigo-100 flex items-center justify-center">
                <svg className="w-12 h-12 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <div className="p-4">
                <h3 className="font-medium">Breakthrough in Cancer Research</h3>
                <p className="text-gray-600 mt-2">New discoveries pave the way for innovative treatments</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg bg-white">
              <div className="w-full h-48 bg-purple-100 flex items-center justify-center">
                <svg className="w-12 h-12 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div className="p-4">
                <h3 className="font-medium">AI Discovers New Antibiotics</h3>
                <p className="text-gray-600 mt-2">Machine learning revolutionizes drug discovery</p>
              </div>
            </div>
          </div>
        </BlurFade>
      </section>

      <footer className="mt-16 text-center text-gray-600">
        <BlurFade delay={0.4}>
          <p>&copy; 2024 HealthyCarry. All rights reserved.</p>
        </BlurFade>
      </footer>
    </main>
  );
}