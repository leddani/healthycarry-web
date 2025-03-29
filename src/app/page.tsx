import BlurFade from '@/components/magicui/blur-fade';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <BlurFade>
        <h1 className="text-4xl font-bold mb-8">Welcome to HealthyCarry</h1>
        <p className="text-xl text-gray-600">Your Modern Healthcare Platform</p>
      </BlurFade>
      
      <section className="w-full max-w-5xl mt-16">
        <BlurFade delay={0.2}>
          <h2 className="text-2xl font-semibold mb-6">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/images/news/cancer-research-nci.jpg"
                alt="Cancer Research"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-medium">Breakthrough in Cancer Research</h3>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/images/news/ai-antibiotics-nih.jpg"
                alt="AI in Medicine"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-medium">AI Discovers New Antibiotics</h3>
              </div>
            </div>
          </div>
        </BlurFade>
      </section>
    </main>
  );
}