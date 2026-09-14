import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import { easeOut, revealViewport } from '@/lib/motion';

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function Reveal({ children, className, delay = 0 }: Props) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      data-reveal
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={revealViewport}
      transition={{ duration: 0.55, ease: easeOut, delay }}
    >
      {children}
    </motion.div>
  );
}
