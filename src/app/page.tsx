import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import { experience } from "@/data/experience";
import Image from "next/image";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src="https://placehold.co/400x400" />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <div style={{ opacity: 1, filter: 'blur(0px)', transform: 'translateY(-6px) translateZ(0px)' }}>
            <h2 className="text-xl font-bold">Famous Doctors in History</h2>
          </div>
          {experience.map((exp, index) => (
            <div key={index} style={{ opacity: 1, filter: 'blur(0px)', transform: 'translateY(-6px) translateZ(0px)' }}>
              <a className="block cursor-pointer" href={exp.links.wikipedia}>
                <div className="rounded-lg bg-card text-card-foreground flex">
                  <div className="flex-none">
                    <span className="relative flex shrink-0 overflow-hidden rounded-full border size-16 m-auto bg-muted-background dark:bg-foreground">
                      <img className="aspect-square h-full w-full object-cover object-top" alt={exp.company} src={`https://placehold.co/400x400?text=${encodeURIComponent(exp.company)}`} />
                    </span>
                  </div>
                  <div className="flex-grow ml-4 items-center flex-col group">
                    <div className="flex flex-col">
                      <div className="flex items-center justify-between gap-x-2 text-base">
                        <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                          {exp.company}
                          <span className="inline-flex gap-x-1"></span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100 rotate-0">
                            <path d="m9 18 6-6-6-6"></path>
                          </svg>
                        </h3>
                        <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                          {exp.start} - {exp.end}
                        </div>
                      </div>
                      <div className="font-sans text-xs">{exp.role}</div>
                    </div>
                    <div className="mt-2 text-xs sm:text-sm" style={{ opacity: 1, height: 'auto' }}>
                      {exp.description}
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={`https://placehold.co/400x400?text=${encodeURIComponent(education.school)}`}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Latest Medical Research
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Stay Updated with Healthcare Innovations
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover groundbreaking medical research and healthcare innovations from leading institutions worldwide.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            <BlurFade delay={BLUR_FADE_DELAY * 12}>
              <div className="rounded-lg bg-card text-card-foreground flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full">
                <Link href="/blog/ai-cancer-research" className="block cursor-pointer">
                  <div className="relative h-40">
                    <Image
                      src="https://placehold.co/800x400?text=AI+Cancer+Research"
                      alt="AI Cancer Research"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="flex flex-col px-2">
                    <div className="space-y-1">
                      <h3 className="font-semibold tracking-tight mt-1 text-base">New AI Model Predicts Drug Combinations for Cancer Treatment</h3>
                      <time className="font-sans text-xs">March 15, 2024</time>
                      <div className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
                        <p>Researchers at MIT and Harvard have developed a new artificial intelligence model that can predict effective drug combinations for cancer treatment, potentially reducing the time and cost of drug discovery.</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-pretty font-sans text-sm text-muted-foreground mt-auto flex flex-col px-2">
                    <div className="mt-2 flex flex-wrap gap-1">
                      <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]">AI Research</div>
                      <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]">Cancer Treatment</div>
                    </div>
                  </div>
                </Link>
              </div>
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 12}>
              <div className="rounded-lg bg-card text-card-foreground flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full">
                <Link href="/blog/alzheimers-research" className="block cursor-pointer">
                  <div className="relative h-40">
                    <Image
                      src="https://placehold.co/800x400?text=Alzheimer's+Research"
                      alt="Alzheimer's Research"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="flex flex-col px-2">
                    <div className="space-y-1">
                      <h3 className="font-semibold tracking-tight mt-1 text-base">Breakthrough in Alzheimer's Research: New Biomarker Discovered</h3>
                      <time className="font-sans text-xs">March 12, 2024</time>
                      <div className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
                        <p>Mayo Clinic researchers have identified a new biomarker that could lead to earlier detection of Alzheimer's disease, potentially allowing for more effective treatment interventions.</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-pretty font-sans text-sm text-muted-foreground mt-auto flex flex-col px-2">
                    <div className="mt-2 flex flex-wrap gap-1">
                      <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]">Neuroscience</div>
                      <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]">Alzheimer's</div>
                    </div>
                  </div>
                </Link>
              </div>
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 12}>
              <div className="rounded-lg bg-card text-card-foreground flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full">
                <Link href="/blog/gene-therapy-research" className="block cursor-pointer">
                  <div className="relative h-40">
                    <Image
                      src="https://placehold.co/800x400?text=Gene+Therapy+Research"
                      alt="Gene Therapy Research"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="flex flex-col px-2">
                    <div className="space-y-1">
                      <h3 className="font-semibold tracking-tight mt-1 text-base">Novel Gene Therapy Shows Promise for Rare Genetic Disorders</h3>
                      <time className="font-sans text-xs">March 10, 2024</time>
                      <div className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
                        <p>Johns Hopkins researchers have developed a new gene therapy approach that could potentially treat multiple rare genetic disorders with a single treatment method.</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-pretty font-sans text-sm text-muted-foreground mt-auto flex flex-col px-2">
                    <div className="mt-2 flex flex-wrap gap-1">
                      <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]">Gene Therapy</div>
                      <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]">Genetic Disorders</div>
                    </div>
                  </div>
                </Link>
              </div>
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 12}>
              <div className="rounded-lg bg-card text-card-foreground flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full">
                <Link href="/blog/mrna-research" className="block cursor-pointer">
                  <div className="relative h-40">
                    <Image
                      src="https://placehold.co/800x400?text=mRNA+Research"
                      alt="mRNA Research"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="flex flex-col px-2">
                    <div className="space-y-1">
                      <h3 className="font-semibold tracking-tight mt-1 text-base">mRNA Technology Advances: Beyond COVID-19 Vaccines</h3>
                      <time className="font-sans text-xs">March 8, 2024</time>
                      <div className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
                        <p>Stanford researchers explore new applications of mRNA technology beyond vaccines, showing promising results in treating various genetic conditions and autoimmune diseases.</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-pretty font-sans text-sm text-muted-foreground mt-auto flex flex-col px-2">
                    <div className="mt-2 flex flex-wrap gap-1">
                      <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]">mRNA Technology</div>
                      <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]">Medical Research</div>
                    </div>
                  </div>
                </Link>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>
    </main>
  );
}