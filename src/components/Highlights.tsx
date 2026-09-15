import { ArrowLeftRight, Bug, Cable, Database, Gauge, ListChecks, Monitor, Sparkles, Workflow } from 'lucide-react';
import { highlights } from '@/data/portfolio';
import Reveal from './ui/Reveal';
import SectionHeader from './ui/SectionHeader';

const icons = { Workflow, Gauge, Cable, Database, ArrowLeftRight, Bug, Sparkles, ListChecks, Monitor } as const;

export default function Highlights() {
  return (
    <section id="highlights" className="section-padding relative">
      <div className="container-max">
        <SectionHeader
          icon={Workflow}
          kicker="Problems I take on"
          title="Solving complex"
          italic="technical problems."
          copy="The work I look for is rarely a greenfield demo. It is usually a workflow, a screen, an API, or a data path that has become expensive to live with."
        />

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {highlights.map((item, i) => {
            const Icon = icons[item.icon as keyof typeof icons] || Workflow;
            return (
              <Reveal key={item.title} delay={i * 0.04}>
                <article className="panel relative h-full overflow-hidden rounded-[1.4rem] p-6">
                  <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-champagne-400/8 blur-2xl" />
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-champagne-400/20 bg-champagne-400/5 text-champagne-300">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-medium tracking-tight text-ink-100">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-300">{item.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
