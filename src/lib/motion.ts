export const easeOut = [0.16, 1, 0.3, 1] as const;

export const motionTokens = {
  duration: 0.7,
  delayStep: 0.07,
};

/** Hero / first-load only. Do not use for scroll sections. */
export const revealOnce = {
  once: true,
  amount: 0.14,
  margin: '0px 0px -48px 0px',
} as const;

/**
 * Scroll sections replay on every enter (top→bottom and bottom→top).
 * `amount: 'some'` keeps content visible until it fully leaves the viewport,
 * so elements never fade out while still on screen.
 */
export const revealViewport = {
  once: false,
  amount: 'some' as const,
  margin: '0px 0px -12% 0px',
};

const SAFE_HASH = /^#[A-Za-z][\w-]*$/;

function isSafeHash(hash: string) {
  return SAFE_HASH.test(hash);
}

export function goHomeHash(hash: string) {
  if (!isSafeHash(hash)) return;
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  if (path !== '/') {
    window.location.assign(`/${hash}`);
    return;
  }
  scrollToHash(hash);
}

export function scrollToHash(hash: string) {
  if (!isSafeHash(hash)) return;
  const el = document.querySelector(hash);
  if (!el) return;

  const lenis = window.__lenis;
  if (lenis) {
    lenis.scrollTo(el as HTMLElement, { offset: -80, duration: 1.15 });
    return;
  }

  el.scrollIntoView({ behavior: 'smooth' });
}
