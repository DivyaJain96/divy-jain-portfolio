import { Award } from 'lucide-react';
import { recognitions } from '@/data/portfolio';
import Reveal from './ui/Reveal';
import SectionHeader from './ui/SectionHeader';

export default function Recognition() {
  return (
    <section id="recognition" className="section-padding relative">
      <div className="container-max">
        <SectionHeader
          index="06"
          kicker="Recognition"
          title="Noted for execution"
          italic="and ownership."
          copy="Two acknowledgements. They describe how the work was carried — nothing more."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {recognitions.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <article className="panel relative overflow-hidden rounded-[1.5rem] p-7">
                <div className="absolute -right-6 -top-8 h-28 w-28 rounded-full bg-champagne-400/10 blur-2xl" />
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-champagne-400/25 bg-champagne-400/8 text-champagne-300">
                  <Award className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-2xl text-ink-100 sm:text-[1.7rem]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-300">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
