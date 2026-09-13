import { Code2, Gauge, Puzzle, ShieldCheck, Sparkles, Waypoints } from 'lucide-react';
import { reasons } from '@/data/portfolio';
import Reveal from './ui/Reveal';
import SectionHeader from './ui/SectionHeader';

const icons = { Code2, Gauge, Puzzle, ShieldCheck, Waypoints, Sparkles } as const;

export default function WhyMe() {
  return (
    <section id="why" className="section-padding relative">
      <div className="container-max">
        <SectionHeader
          index="08"
          kicker="Why work with me"
          title="Hire someone who treats"
          italic="code as a long-term asset."
          copy="Clients, recruiters, and teams get a developer who thinks in systems, writes for the next person, and stays accountable after the first demo."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item, i) => {
            const Icon = icons[item.icon as keyof typeof icons] || Sparkles;
            return (
              <Reveal key={item.title} delay={i * 0.05}>
                <article className="panel relative h-full overflow-hidden rounded-[1.4rem] p-6">
                  <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-champagne-400/8 blur-2xl" />
                  <Icon className="h-5 w-5 text-champagne-300" />
                  <h3 className="mt-4 text-2xl text-ink-100">{item.title}</h3>
                  <p className="mt-3 text-sm text-ink-300">{item.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
