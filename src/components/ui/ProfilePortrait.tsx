import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { profile } from '@/data/portfolio';
import { useReady } from '@/context/ReadyContext';
import { easeOut, revealViewport } from '@/lib/motion';

type Variant = 'hero' | 'about' | 'nav';

interface Props {
  variant?: Variant;
  className?: string;
}

const sizeClass: Record<Variant, string> = {
  hero: 'h-[7.25rem] w-[7.25rem] sm:h-32 sm:w-32 lg:h-36 lg:w-36',
  about: 'h-40 w-40 sm:h-48 sm:w-48',
  nav: 'h-10 w-10',
};

const radiusClass: Record<Variant, string> = {
  hero: 'rounded-full',
  about: 'rounded-[1.65rem]',
  nav: 'rounded-full',
};

export default function ProfilePortrait({ variant = 'about', className = '' }: Props) {
  const reduced = useReducedMotion();
  const { ready } = useReady();
  const play = Boolean(ready || reduced);
  const src = profile.photo;
  const [status, setStatus] = useState<'pending' | 'ready' | 'fallback'>(src ? 'pending' : 'fallback');

  useEffect(() => {
    if (!src) {
      setStatus('fallback');
      return;
    }

    let cancelled = false;
    const image = new Image();
    image.onload = () => {
      if (!cancelled) setStatus('ready');
    };
    image.onerror = () => {
      if (!cancelled) setStatus('fallback');
    };
    image.src = src;
    return () => {
      cancelled = true;
    };
  }, [src]);

  const frame = (
    <div
      className={`profile-frame group/photo relative ${variant === 'nav' ? 'profile-frame-nav' : ''} ${sizeClass[variant]} ${radiusClass[variant]} ${className}`}
    >
      {variant !== 'nav' && !reduced && <span className="profile-glow" aria-hidden />}
      <div className={`profile-inner ${radiusClass[variant]}`}>
        {status === 'ready' ? (
          <img
            src={src}
            alt="Divy Jain - Software Developer"
            width={400}
            height={400}
            decoding="async"
            loading={variant === 'about' ? 'lazy' : 'eager'}
            className="profile-photo h-full w-full object-cover object-[center_18%]"
            {...(variant === 'hero'
              ? ({ fetchpriority: 'high' } as { fetchpriority: 'high' })
              : {})}
          />
        ) : (
          <span className={`flex h-full w-full items-center justify-center bg-ink-850 font-display italic text-champagne-200 ${
            variant === 'nav' ? 'text-base' : variant === 'hero' ? 'text-3xl' : 'text-5xl'
          }`}>
            {profile.initials}
          </span>
        )}
      </div>
    </div>
  );

  if (variant === 'nav') {
    return frame;
  }

  const floated = (
    <div className={reduced ? undefined : 'profile-float'}>{frame}</div>
  );

  if (variant === 'hero') {
    return (
      <motion.div
        initial={reduced ? false : { opacity: 0, scale: 0.9 }}
        animate={play ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.8, ease: easeOut, delay: 0.14 }}
      >
        {floated}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={revealViewport}
      transition={{ duration: 0.7, ease: easeOut }}
    >
      {floated}
    </motion.div>
  );
}
