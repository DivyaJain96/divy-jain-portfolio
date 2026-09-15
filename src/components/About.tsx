import { focusAreas, profile, stats, strengths } from '@/data/portfolio';
import { Cable, Layers, ListChecks, Sparkles, UserRound } from 'lucide-react';
import { useCountUp } from '@/hooks/useCountUp';
import { useInView } from '@/hooks/useInView';
import ProfilePortrait from './ui/ProfilePortrait';
import Reveal from './ui/Reveal';
import SectionHeader from './ui/SectionHeader';

const focusIcons = { Layers, Cable, ListChecks, Sparkles } as const;

function Stat({
  value,
  suffix,
  label,
  display,
  inView,
}: {
  value: number;
  suffix: string;
  label: string;
  display?: string;
  inView: boolean;
}) {
  const count = useCountUp(value, 1600, inView && !display);
  return (
    <div className="panel rounded-2xl p-5">
      <div
        className={`font-display font-medium tracking-tight text-ink-100 ${
          display && display.length > 20 ? 'text-[1.35rem] leading-snug sm:text-2xl' : 'text-3xl sm:text-4xl'
        }`}
      >
        {display ?? (
          <>
            {count}
            {suffix}
          </>
        )}
      </div>
      <div className="mt-2 text-sm text-ink-300">{label}</div>
    </div>
  );
}

export default function About() {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <section id="about" className="section-padding relative">
      <div className="container-max">
        <SectionHeader
          icon={UserRound}
          kicker="About"
          title="A Software Developer who"
          italic="works across the stack."
          copy="Hands-on experience designing end-to-end module workflows and system architecture, then developing enterprise-level business software and web applications across frontend, backend, databases, APIs, third-party integrations, automation, and production support. I start from the business requirement and shape the complete application flow before and during implementation."
        />

        <div ref={ref} className="grid gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="panel relative h-full overflow-hidden rounded-[1.7rem] p-8">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-champagne-400/10 blur-2xl" />
              <ProfilePortrait variant="about" />
              <h3 className="mt-6 text-2xl font-medium tracking-tight text-ink-100">{profile.name}</h3>
              <p className="mt-2 text-ink-300">{profile.role}</p>
              <p className="mt-1 text-sm text-ink-400">{profile.tagline}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full border border-success-400/25 bg-success-400/10 px-3 py-1 text-xs text-success-400">
                  Available
                </span>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-ink-200">
                  {profile.location}
                </span>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-ink-300">{profile.bio}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-400">
                Java, Spring Boot, and SQL on the backend. HTML, CSS, Bootstrap, JavaScript, jQuery, AJAX, JSP, and
                React (working knowledge) on the UI. Hands-on with databases, APIs, integrations, and production support.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={0.08 * i}>
                <Stat {...stat} inView={inView} />
              </Reveal>
            ))}
            {focusAreas.map((item, i) => {
              const Icon = focusIcons[item.icon as keyof typeof focusIcons] || Layers;
              return (
              <Reveal key={item.title} delay={0.12 + i * 0.06}>
                <article className="panel h-full rounded-2xl p-5">
                  <span className="flex h-7 w-7 items-center justify-center text-champagne-400" aria-hidden>
                    <Icon className="h-4 w-4" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-3 text-xl font-medium tracking-tight text-ink-100">{item.title}</h3>
                  <p className="mt-2 text-sm text-ink-300">{item.text}</p>
                </article>
              </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal className="mt-8 flex flex-wrap gap-2" delay={0.2}>
          {strengths.map((item) => (
            <span
              key={item}
              className="interactive-chip rounded-full border border-white/8 bg-white/[0.03] px-4 py-2 text-sm text-ink-200"
            >
              {item}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
