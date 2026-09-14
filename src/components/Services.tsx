import { ArrowUpRight, Cable, Database, Gauge, Layers, Server, Waypoints } from 'lucide-react';
import { services } from '@/data/portfolio';
import { goHomeHash } from '@/lib/motion';
import Reveal from './ui/Reveal';
import SectionHeader from './ui/SectionHeader';

const icons = { Server, Waypoints, Cable, Layers, Gauge, Database } as const;

export default function Services() {
  return (
    <section id="services" className="section-padding relative">
      <div className="container-max">
        <SectionHeader
          icon={Layers}
          kicker="What I do"
          title="Core expertise,"
          italic="said plainly."
          copy="I specialize in reliable backends, APIs, integrations, and the business workflows sitting on top of them — not a long list of languages."
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((item, i) => {
            const Icon = icons[item.icon as keyof typeof icons] || Server;
            return (
              <Reveal key={item.title} delay={i * 0.05}>
                <article className="panel group h-full rounded-[1.4rem] p-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-champagne-400/20 bg-champagne-400/5 text-champagne-300 transition-transform duration-220 ease-out group-hover:scale-105">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-xl font-medium tracking-tight text-ink-100">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-200">{item.plain}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-400">{item.value}</p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-10 flex justify-center" delay={0.12}>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              goHomeHash('#contact');
            }}
            className="btn-primary"
          >
            Let’s work together
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
