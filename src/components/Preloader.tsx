import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { profile } from '@/data/portfolio';
import { useReady } from '@/context/ReadyContext';
import { easeOut } from '@/lib/motion';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const reduced = useReducedMotion();
  const { setReady } = useReady();

  useEffect(() => {
    if (reduced) {
      setReady(true);
      setLoading(false);
      return;
    }

    let current = 0;
    const timer = window.setInterval(() => {
      current += Math.random() * 12 + 6;
      if (current >= 100) {
        current = 100;
        window.clearInterval(timer);
        setReady(true);
        window.setTimeout(() => setLoading(false), 280);
      }
      setProgress(Math.floor(Math.min(current, 100)));
    }, 32);

    return () => window.clearInterval(timer);
  }, [reduced, setReady]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-void"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.65, ease: easeOut }}
        >
          <motion.div
            className="mb-8 font-display text-6xl font-medium tracking-tight text-champagne-300"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easeOut }}
          >
            {profile.initials}
          </motion.div>
          <div className="h-px w-48 overflow-hidden bg-ink-800">
            <motion.div
              className="h-full origin-left bg-gradient-to-r from-champagne-400 to-signal-400"
              style={{ scaleX: progress / 100 }}
            />
          </div>
          <div className="mt-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.14em] text-ink-400">
            <span className="tabular-nums text-ink-200">{String(progress).padStart(3, '0')}</span>
            Composing systems
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
