import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { navLinks, profile, whatsappChatUrl } from '@/data/portfolio';
import { goHomeHash } from '@/lib/motion';

function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-champagne-400 text-void shadow-glow transition-transform duration-220 ease-out hover:scale-105 active:scale-95"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default function Footer() {
  const whatsappHref = whatsappChatUrl(profile.whatsapp.trim() || profile.phone.trim());

  return (
    <footer className="relative border-t border-white/5 px-4 pb-8 pt-16 sm:px-6">
      <div className="absolute inset-x-0 top-0 h-px hairline" />
      <div className="container-max">
        <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr_0.7fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-champagne-400/30 font-display text-sm font-medium text-champagne-200">
                {profile.initials}
              </span>
              <div>
                <p className="text-lg text-ink-100">{profile.name}</p>
                <p className="text-sm text-ink-400">{profile.role}</p>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm text-ink-300">{profile.bioShort}</p>
            <p className="mt-2 text-sm text-ink-400">{profile.location}</p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                goHomeHash('#contact');
              }}
              className="btn-secondary mt-5 !px-4 !py-2.5 !text-sm"
            >
              Start a conversation
            </a>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-champagne-400">Navigate</p>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      goHomeHash(link.href);
                    }}
                    className="text-sm text-ink-300 transition-colors duration-220 hover:text-champagne-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-champagne-400">Connect</p>
            <div className="mt-4 flex flex-col gap-3">
              {profile.linkedin && (
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-ink-200 transition-colors duration-220 hover:text-champagne-200"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              )}
              {profile.email && (
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 text-sm text-ink-200 transition-colors duration-220 hover:text-champagne-200"
                >
                  <Mail className="h-4 w-4" /> {profile.email}
                </a>
              )}
              {whatsappHref && (
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-ink-200 transition-colors duration-220 hover:text-champagne-200"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-xs text-ink-400 sm:flex-row">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p>Designed as a working system, not a template.</p>
        </div>
      </div>
      <BackToTop />
    </footer>
  );
}
