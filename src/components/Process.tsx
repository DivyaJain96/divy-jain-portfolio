import { Code, PenTool, Rocket, Search } from 'lucide-react';
import { processSteps } from '@/data/portfolio';
import Reveal from './ui/Reveal';
import SectionHeader from './ui/SectionHeader';

const icons = { Search, PenTool, Code, Rocket } as const;

export default function Process() {
  return (
    <section id="process" className="section-padding relative">
      <div className="container-max">
        <SectionHeader
          index="09"
          kicker="How I work"
          title="A calm process for"
          italic="predictable delivery."
          copy="Every engagement follows a transparent path — so you always know what is happening and what comes next."
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step, i) => {
            const Icon = icons[step.icon as keyof typeof icons] || Code;
            return (
              <Reveal key={step.step} delay={i * 0.08}>
                <article className="panel relative h-full rounded-[1.4rem] p-6">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 text-champagne-300">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-display text-3xl italic text-white/10">{step.step}</span>
                  </div>
                  <h3 className="text-2xl text-ink-100">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-300">{step.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
