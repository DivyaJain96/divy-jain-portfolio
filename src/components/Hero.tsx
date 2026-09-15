import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowUpRight, Linkedin } from 'lucide-react';
import { featuredTech, profile, SHOW_RESUME } from '@/data/portfolio';
import { useReady } from '@/context/ReadyContext';
import { easeOut, goHomeHash } from '@/lib/motion';
import HeroCanvas from './HeroCanvas';
import MagneticButton from './MagneticButton';
import ProfilePortrait from './ui/ProfilePortrait';

export default function Hero() {
  const reduced = useReducedMotion();
  const { ready } = useReady();
  const play = Boolean(ready || reduced);
  const [word, setWord] = useState(0);
  const [desktop, setDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const sync = () => setDesktop(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    if (reduced || !play) return;
    const id = window.setInterval(() => {
      setWord((w) => (w + 1) % profile.rotatingFocus.length);
    }, 2800);
    return () => window.clearInterval(id);
  }, [reduced, play]);

  return (
    <section id="hero" className="relative min-h-[100svh] overflow-hidden pt-28 pb-16 [clip-path:inset(0)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(201,174,124,0.08),transparent_36%)]" />
      <div className="hero-aurora pointer-events-none absolute -left-24 top-28 h-72 w-72 rounded-full bg-champagne-400/10 blur-3xl lg:top-10" />
      <div className="pointer-events-none absolute inset-0 opacity-30 lg:hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-champagne-400/[0.06] via-void/40 to-void" />
      </div>

      <div className="container-max relative grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:min-h-[78vh]">
        <div>
          <motion.div
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={play ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.05 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-success-400/70" />
              <span className="relative h-2 w-2 rounded-full bg-success-400" />
            </span>
            <span className="text-sm text-ink-200">{profile.availability}</span>
          </motion.div>

          <div className="mb-6">
            <ProfilePortrait variant="hero" />
          </div>

          <motion.p
            className="font-mono text-xs uppercase tracking-[0.24em] text-champagne-400"
            initial={reduced ? false : { opacity: 0, y: 14 }}
            animate={play ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            transition={{ duration: 0.55, ease: easeOut, delay: 0.12 }}
          >
            {profile.role}
          </motion.p>

          <h1 className="mt-3 text-[2.65rem] font-medium leading-[1.02] tracking-tight text-ink-100 sm:text-6xl lg:text-7xl xl:text-[4.85rem]">
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                initial={reduced ? false : { y: '110%' }}
                animate={play ? { y: 0 } : { y: '110%' }}
                transition={{ duration: 0.9, ease: easeOut, delay: 0.16 }}
              >
                {profile.firstName}
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                className="block font-medium text-champagne-300"
                initial={reduced ? false : { y: '110%' }}
                animate={play ? { y: 0 } : { y: '110%' }}
                transition={{ duration: 0.9, ease: easeOut, delay: 0.28 }}
              >
                {profile.lastName}
              </motion.span>
            </span>
          </h1>

          <motion.p
            className="mt-6 max-w-xl text-lg leading-snug tracking-tight text-ink-100 sm:text-xl lg:text-[1.35rem]"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={play ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.65, ease: easeOut, delay: 0.4 }}
          >
            {profile.headline}
          </motion.p>

          <motion.p
            className="mt-3 max-w-xl text-base leading-relaxed text-ink-300 sm:text-lg"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={play ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.65, ease: easeOut, delay: 0.5 }}
          >
            I work across
            <span className="relative mt-1 block min-h-[1.6em] text-champagne-200" aria-live="polite">
              <AnimatePresence mode="wait">
                <motion.span
                  key={profile.rotatingFocus[word]}
                  className="block"
                  initial={reduced ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: easeOut }}
                >
                  {profile.rotatingFocus[word]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.p>

          <motion.p
            className="mt-5 max-w-lg font-mono text-[11px] uppercase tracking-[0.16em] text-ink-300 sm:text-xs"
            initial={reduced ? false : { opacity: 0 }}
            animate={play ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.62, duration: 0.55 }}
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            initial={reduced ? false : { opacity: 0, y: 14 }}
            animate={play ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            transition={{ delay: 0.7, duration: 0.55, ease: easeOut }}
          >
            <MagneticButton
              href="#projects"
              className="btn-primary"
              ariaLabel="View my work"
              onClick={(e) => {
                e.preventDefault();
                goHomeHash('#projects');
              }}
            >
              View my work
              <ArrowUpRight className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton
              href="#contact"
              className="btn-secondary"
              ariaLabel="Let's connect"
              onClick={(e) => {
                e.preventDefault();
                goHomeHash('#contact');
              }}
            >
              Let’s connect
            </MagneticButton>
          </motion.div>

          <motion.div
            className="mt-8 flex items-center gap-4 text-sm text-ink-300"
            initial={reduced ? false : { opacity: 0 }}
            animate={play ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.82, duration: 0.5 }}
          >
            {profile.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-ink-200 transition-colors duration-220 hover:border-champagne-400/40 hover:text-champagne-200"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            )}
            {SHOW_RESUME && profile.resume && (
              <a href={profile.resume} download className="link-underline">
                Resume
              </a>
            )}
          </motion.div>
        </div>

        <motion.div
          className="relative hidden h-[340px] sm:h-[420px] lg:block lg:h-[540px]"
          initial={reduced ? false : { opacity: 0, scale: 0.97 }}
          animate={play ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.95, ease: easeOut, delay: 0.22 }}
        >
          <div className="absolute inset-0 overflow-hidden rounded-[2rem] border border-champagne-400/15 bg-ink-850/70">
            {desktop && <HeroCanvas />}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent" />
            <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-void/50 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-200">
              System map
            </div>
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
              <p className="max-w-[18rem] text-sm text-ink-200">
                Frontend, backend, data, APIs, integrations, automation, and production — the shape of systems I work on.
              </p>
              <span className="hidden font-mono text-[10px] uppercase tracking-widest text-champagne-400 sm:block">
                Live canvas
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="marquee-wrap relative mt-16 overflow-hidden border-y border-white/5 py-4">
        <div className="marquee-track text-sm text-ink-400">
          {[0, 1].map((copy) => (
            <div key={copy} className="marquee-group" aria-hidden={copy === 1}>
              {featuredTech.map((tech) => (
                <span key={`${copy}-${tech}`} className="inline-flex items-center gap-10">
                  {tech}
                  <span className="text-champagne-500">/</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
