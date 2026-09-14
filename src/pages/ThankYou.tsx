import { useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Check } from 'lucide-react';
import { profile } from '@/data/portfolio';
import { easeOut } from '@/lib/motion';
import AmbientBackground from '@/components/AmbientBackground';
import GrainOverlay from '@/components/GrainOverlay';
import CustomCursor from '@/components/CustomCursor';
import ProfilePortrait from '@/components/ui/ProfilePortrait';

export default function ThankYou() {
  const reduced = useReducedMotion();

  useEffect(() => {
    document.title = 'Thank you for your inquiry | Divy Jain';
  }, []);

  return (
    <div className="relative min-h-[100svh] overflow-hidden">
      <AmbientBackground />
      <GrainOverlay />
      <CustomCursor />

      <header className="relative z-10 flex items-center justify-between px-4 py-5 sm:px-8">
        <a href="/" className="flex items-center gap-2.5">
          <ProfilePortrait variant="nav" />
          <span className="font-medium text-ink-100">{profile.name}</span>
        </a>
        {profile.linkedin && (
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-ink-300 transition-colors hover:text-champagne-200"
          >
            LinkedIn
          </a>
        )}
      </header>

      <main className="relative z-10 flex min-h-[calc(100svh-88px)] items-center justify-center px-4 pb-16 pt-6">
        <div className="hero-aurora pointer-events-none absolute left-1/2 top-16 h-64 w-64 -translate-x-1/2 rounded-full bg-champagne-400/10 blur-3xl" />

        <div className="mx-auto w-full max-w-xl text-center">
          <motion.div
            className="mx-auto flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-full border border-champagne-400/30 bg-champagne-400/10 text-champagne-200 shadow-glow"
            initial={reduced ? false : { opacity: 0, scale: 0.72 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: easeOut }}
          >
            <motion.span
              initial={reduced ? false : { opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.4, ease: easeOut }}
            >
              <Check className="h-10 w-10" strokeWidth={2.25} />
            </motion.span>
          </motion.div>

          <motion.p
            className="mt-8 font-mono text-xs uppercase tracking-[0.22em] text-champagne-400"
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.5, ease: easeOut }}
          >
            Inquiry submitted
          </motion.p>

          <motion.h1
            className="mt-4 text-[1.85rem] font-medium tracking-tight text-ink-100 sm:text-5xl"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: easeOut }}
          >
            Thank you for your inquiry!
          </motion.h1>

          <motion.p
            className="mt-5 text-lg text-ink-100"
            initial={reduced ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.55, ease: easeOut }}
          >
            Your inquiry has been successfully submitted.
          </motion.p>

          <motion.p
            className="mx-auto mt-4 max-w-md text-ink-300"
            initial={reduced ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42, duration: 0.55, ease: easeOut }}
          >
            Thank you for reaching out. I appreciate your interest and will review your inquiry carefully. I will get
            back to you as soon as possible, typically within 24 hours.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
            initial={reduced ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.54, duration: 0.55, ease: easeOut }}
          >
            <a href="/" className="btn-primary min-h-12">
              Back to Home
            </a>
            <a href="/#projects" className="btn-secondary min-h-12">
              View My Work
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
