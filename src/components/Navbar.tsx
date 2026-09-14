import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Briefcase, Code2, Folder, Layers, Mail, Menu, UserRound, X } from 'lucide-react';
import { navLinks, profile } from '@/data/portfolio';
import { useReady } from '@/context/ReadyContext';
import { easeOut, goHomeHash } from '@/lib/motion';
import ProfilePortrait from './ui/ProfilePortrait';

const SECTIONS = navLinks.map((l) => l.href.slice(1));

const NAV_ICONS = {
  '#about': UserRound,
  '#services': Layers,
  '#skills': Code2,
  '#projects': Folder,
  '#experience': Briefcase,
  '#contact': Mail,
} as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('hero');
  const reduced = useReducedMotion();
  const { ready } = useReady();
  const play = Boolean(ready || reduced);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const pos = window.scrollY + 140;
      let current = 'hero';
      for (const id of ['hero', ...SECTIONS]) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= pos) current = id;
      }
      setActive(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const go = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setOpen(false);
    goHomeHash(href);
  };

  return (
    <>
      <motion.header
        className={`site-header fixed inset-x-0 top-0 overflow-hidden ${open ? 'z-[70]' : 'z-50'}`}
        initial={reduced ? false : { y: -28, opacity: 0 }}
        animate={play ? { y: 0, opacity: 1 } : { y: -28, opacity: 0 }}
        transition={{ duration: 0.7, ease: easeOut, delay: 0.05 }}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-3 bg-void sm:h-4" />
        <div className="site-header-mask pointer-events-none absolute inset-0" />
        <div className="relative z-10 flex justify-center px-3 pt-3 pb-2 sm:px-4 sm:pt-4">
        <nav
          className={`flex w-full max-w-site items-center justify-between gap-3 rounded-full px-3 py-2 sm:px-4 transition-all duration-500 ${
            scrolled
              ? 'glass shadow-lift max-lg:bg-void/90'
              : 'border border-transparent bg-transparent max-lg:border-white/[0.06] max-lg:bg-void/80 max-lg:backdrop-blur-md'
          }`}
          aria-label="Primary"
        >
          <a
            href="#hero"
            onClick={(e) => go(e, '#hero')}
            className="flex items-center gap-2.5 rounded-full pr-2"
            aria-label="Divy Jain — back to top"
          >
            <ProfilePortrait variant="nav" />
            <span className="hidden text-sm font-medium tracking-tight text-ink-100 sm:block">{profile.name}</span>
          </a>

          <div className="hidden items-center lg:flex">
            {navLinks.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => go(e, link.href)}
                  aria-current={isActive ? 'location' : undefined}
                  className={`nav-link rounded-full px-2.5 py-2 text-[13px] xl:px-3 ${
                    isActive ? 'text-ink-100' : 'text-ink-300 hover:text-ink-100'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-white/5"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <a href="#contact" onClick={(e) => go(e, '#contact')} className="btn-primary group !py-2 !px-4 !text-sm hidden sm:inline-flex">
              Let’s talk
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-full glass text-ink-100 transition-transform duration-220 ease-out hover:scale-[1.04] active:scale-95 lg:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-void/80 backdrop-blur-md"
              aria-label="Close menu overlay"
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="absolute inset-x-3 top-[4.6rem] overflow-hidden rounded-3xl panel p-6"
              initial={{ opacity: 0, y: -16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link, i) => {
                  const Icon = NAV_ICONS[link.href as keyof typeof NAV_ICONS];
                  const isActive = active === link.href.slice(1);
                  return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => go(e, link.href)}
                    aria-current={isActive ? 'location' : undefined}
                    className={`flex min-h-12 items-center gap-3 rounded-2xl px-4 py-3 text-[1.05rem] font-medium tracking-tight transition-colors duration-220 ease-out ${
                      isActive ? 'bg-white/5 text-champagne-200' : 'text-ink-100 hover:bg-white/[0.04] active:bg-white/[0.07]'
                    }`}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.04 }}
                  >
                    {Icon && <Icon className="h-4 w-4 shrink-0 text-champagne-400" strokeWidth={1.75} />}
                    {link.label}
                  </motion.a>
                  );
                })}
              </div>
              <a
                href="#contact"
                onClick={(e) => go(e, '#contact')}
                className="btn-primary group mt-6 w-full"
              >
                Let’s talk
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
