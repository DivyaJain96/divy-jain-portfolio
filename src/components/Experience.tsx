import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import { education, experience, type TimelineEntry } from '@/data/portfolio';
import Reveal from './ui/Reveal';
import SectionHeader from './ui/SectionHeader';

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="container-max">
        <SectionHeader
          icon={Briefcase}
          kicker="Experience"
          title="How the work has"
          italic="grown in practice."
          copy="Not a job-title stack. The through-line is backend ownership: workflows, integrations, performance, and what happens after something is live."
        />

        <Timeline items={experience} followScroll />

        <div className="mt-16 lg:mt-20">
          <SectionHeader
            icon={GraduationCap}
            kicker="Education"
            title="B.Sc., then"
            italic="MCA."
          />
          <Timeline items={education} followScroll />
        </div>
      </div>
    </section>
  );
}

function Timeline({ items, followScroll = false }: { items: TimelineEntry[]; followScroll?: boolean }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start end', 'end start'],
  });
  const markerTop = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const markerY = useTransform(scrollYProgress, [0, 1], ['0%', '-100%']);
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const showMarker = followScroll && !reduced;

  return (
    <div ref={trackRef} className="relative">
      <div className="absolute bottom-0 left-[11px] top-2 w-px overflow-visible bg-gradient-to-b from-champagne-400/35 via-white/10 to-transparent md:left-1/2 md:-translate-x-px">
        {showMarker && (
          <>
            <motion.span
              aria-hidden
              className="absolute left-0 top-0 w-px origin-top bg-gradient-to-b from-champagne-400/80 via-champagne-400/45 to-champagne-400/15"
              style={{ height: lineHeight }}
            />
            <motion.span
              aria-hidden
              data-timeline-marker
              className="pointer-events-none absolute left-1/2 z-[1] h-[22px] w-[22px] rounded-full border border-champagne-400/80 bg-void"
              style={{ top: markerTop, x: '-50%', y: markerY }}
            >
              <span className="absolute inset-1.5 rounded-full bg-champagne-400" />
            </motion.span>
          </>
        )}
      </div>

      <div className="space-y-10">
        {items.map((item, i) => (
          <Reveal key={item.role} delay={i * 0.08}>
            <article className="group relative grid gap-6 md:grid-cols-2">
              <div className={`pl-10 ${i % 2 === 1 ? 'md:col-start-2 md:pl-12' : 'md:pl-0 md:pr-12 md:text-right'}`}>
                {item.duration && (
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-champagne-400">
                    {item.duration}
                  </p>
                )}
                <h3
                  className={`text-2xl font-medium tracking-tight text-ink-100 md:text-[1.75rem] ${
                    item.duration ? 'mt-2' : ''
                  }`}
                >
                  {item.role}
                </h3>
                {item.organization && <p className="mt-1 text-ink-200">{item.organization}</p>}
                {item.location && <p className="text-sm text-ink-400">{item.location}</p>}
              </div>

              <div className={`${i % 2 === 1 ? 'md:col-start-1 md:row-start-1 md:pr-12' : ''}`}>
                <div className="panel ml-10 rounded-[1.4rem] p-6 md:ml-0">
                  <span className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-ink-300">
                    {item.type}
                  </span>
                  <p className="mt-4 text-ink-200">{item.summary}</p>
                  {item.contributions.length > 0 && (
                    <ul className="mt-5 space-y-2.5">
                      {item.contributions.map((point) => (
                        <li key={point} className="flex gap-3 text-sm text-ink-300">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-champagne-400" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              <span
                aria-hidden
                className="absolute left-0 top-2 h-[22px] w-[22px] rounded-full border border-champagne-400/60 bg-void transition-transform duration-220 ease-out group-hover:scale-110 md:left-1/2 md:-translate-x-1/2"
              >
                {!showMarker && <span className="absolute inset-1.5 rounded-full bg-champagne-400" />}
              </span>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
