import { useRef } from 'react';
import {
  Cable,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Layers,
  Monitor,
  Rocket,
  Server,
  Sparkles,
  Waypoints,
  Wrench,
} from 'lucide-react';
import { applicationFlow, primaryStack, skillGroups } from '@/data/portfolio';
import Reveal from './ui/Reveal';
import SectionHeader from './ui/SectionHeader';

const icons = {
  Code2,
  Monitor,
  Server,
  Cable,
  Database,
  GitBranch,
  Layers,
  Cloud,
  Wrench,
  Rocket,
  Sparkles,
  Waypoints,
} as const;

function SkillCard({
  group,
  delay,
}: {
  group: (typeof skillGroups)[number];
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const Icon = icons[group.icon as keyof typeof icons] || Code2;

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(hover: none)').matches) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty('--mx', `${x}px`);
    el.style.setProperty('--my', `${y}px`);
    const rx = ((y - rect.height / 2) / rect.height) * -3;
    const ry = ((x - rect.width / 2) / rect.width) * 3;
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
  };

  const onLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = 'perspective(900px) rotateX(0) rotateY(0)';
  };

  return (
    <Reveal delay={delay}>
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="panel tilt-card group relative overflow-hidden rounded-[1.4rem] p-6"
        style={{
          backgroundImage:
            'radial-gradient(220px circle at var(--mx, 50%) var(--my, 0%), rgba(201,174,124,0.12), transparent 55%)',
        }}
      >
        <div className="mb-5 flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-void/40 text-champagne-300 transition-transform duration-220 ease-out group-hover:scale-105 group-hover:border-champagne-400/30">
            <Icon className="h-5 w-5" />
          </span>
          <h3 className="text-xl font-medium tracking-tight text-ink-100">{group.title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {group.skills.map((skill) => (
            <span
              key={skill.name}
              className="interactive-chip rounded-full border border-white/8 bg-white/[0.03] px-3 py-1.5 text-sm text-ink-200"
            >
              {skill.name}
            </span>
          ))}
        </div>
        {'note' in group && group.note && (
          <p className="mt-3 text-xs leading-relaxed text-ink-400">{group.note}</p>
        )}
      </div>
    </Reveal>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="container-max">
        <SectionHeader
          icon={Code2}
          kicker="Capabilities"
          title="A stack for"
          italic="enterprise software & web applications."
          copy="Software Developer with full-stack, hands-on experience across frontend, backend, databases, APIs, integrations, automation, and production environments. React is working knowledge — not the primary specialization."
        />

        <Reveal className="mb-6 panel rounded-[1.5rem] p-5 sm:p-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-champagne-400">
            Application flow
          </p>
          <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {applicationFlow.map((step, i) => {
              const Icon = icons[step.icon as keyof typeof icons] || Server;
              return (
                <div
                  key={step.title}
                  className="interactive-chip flex min-h-12 items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.03] px-3 py-2.5"
                >
                  <span className="font-mono text-[10px] text-champagne-400">{String(i + 1).padStart(2, '0')}</span>
                  <Icon className="h-3.5 w-3.5 shrink-0 text-champagne-400" strokeWidth={1.75} />
                  <span className="text-sm text-ink-100">{step.title}</span>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal className="mb-6 panel rounded-[1.5rem] p-5 sm:p-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-champagne-400">Primary stack</p>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {primaryStack.map((skill) => (
              <span
                key={skill}
                className="interactive-chip rounded-full border border-champagne-400/30 bg-champagne-400/10 px-3.5 py-1.5 text-sm text-champagne-100"
              >
                {skill}
              </span>
            ))}
          </div>
        </Reveal>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups
            .filter((group) => group.title !== 'Additional Experience')
            .map((group, i) => (
              <SkillCard key={group.title} group={group} delay={i * 0.06} />
            ))}
        </div>
        {skillGroups
          .filter((group) => group.title === 'Additional Experience')
          .map((group) => (
            <Reveal key={group.title} className="mt-4" delay={0.2}>
              <div className="rounded-[1.2rem] border border-white/6 bg-white/[0.02] px-5 py-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-400">
                  Additional experience
                </p>
                <p className="mt-1 text-xs text-ink-500">Earlier or secondary technologies — not the current focus.</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="interactive-chip rounded-full border border-white/6 bg-transparent px-2.5 py-1 text-xs text-ink-400"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
      </div>
    </section>
  );
}
