import { experience } from '@/data/portfolio';
import Reveal from './ui/Reveal';
import SectionHeader from './ui/SectionHeader';

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="container-max">
        <SectionHeader
          index="07"
          kicker="Experience"
          title="How the work has"
          italic="grown in practice."
          copy="Not a job-title stack. The through-line is backend ownership: workflows, integrations, performance, and what happens after something is live."
        />

        <div className="relative">
          <div className="absolute bottom-0 left-[11px] top-2 w-px bg-gradient-to-b from-champagne-400/70 via-white/10 to-transparent md:left-1/2 md:-translate-x-px" />

          <div className="space-y-10">
            {experience.map((item, i) => (
              <Reveal key={item.role} delay={i * 0.08}>
                <article className="relative grid gap-6 md:grid-cols-2">
                  <div className={`pl-10 md:pl-0 ${i % 2 === 1 ? 'md:col-start-2' : 'md:pr-12 md:text-right'}`}>
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-champagne-400">
                      {item.duration}
                    </p>
                    <h3 className="mt-2 text-3xl text-ink-100">{item.role}</h3>
                    <p className="mt-1 text-ink-200">{item.organization}</p>
                    {item.location && <p className="text-sm text-ink-400">{item.location}</p>}
                  </div>

                  <div className={`${i % 2 === 1 ? 'md:col-start-1 md:row-start-1 md:pr-12' : ''}`}>
                    <div className="panel ml-10 rounded-[1.4rem] p-6 transition-transform duration-500 md:ml-0 md:hover:-translate-y-1">
                      <span className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-ink-300">
                        {item.type}
                      </span>
                      <p className="mt-4 text-ink-200">{item.summary}</p>
                      <ul className="mt-5 space-y-2.5">
                        {item.contributions.map((point) => (
                          <li key={point} className="flex gap-3 text-sm text-ink-300">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-champagne-400" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <span className="absolute left-0 top-2 h-[22px] w-[22px] rounded-full border border-champagne-400/60 bg-void md:left-1/2 md:-translate-x-1/2">
                    <span className="absolute inset-1.5 rounded-full bg-champagne-400" />
                  </span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
