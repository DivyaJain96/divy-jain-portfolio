import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

/** Desktop mouse only. Never enable on touch/coarse pointers. */
function isDesktopMouse() {
  return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
}

export default function CustomCursor() {
  const [desktop] = useState(() => (typeof window === 'undefined' ? false : isDesktopMouse()));
  const [origin, setOrigin] = useState<{ x: number; y: number } | null>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const hover = useRef({ interactive: false, card: false });
  const rafRef = useRef(0);
  const started = useRef(false);

  useEffect(() => {
    if (!desktop) return;

    const onMove = (e: MouseEvent) => {
      if (!started.current && e.clientX === 0 && e.clientY === 0) return;

      mouse.current = { x: e.clientX, y: e.clientY };

      if (!started.current) {
        started.current = true;
        ringPos.current = { x: e.clientX, y: e.clientY };
        document.documentElement.classList.add('cursor-ready');
        setOrigin({ x: e.clientX, y: e.clientY });
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }

      const target = e.target as HTMLElement | null;
      hover.current.interactive = Boolean(
        target?.closest('a, button, input, textarea, select, [role="button"]'),
      );
      hover.current.card = Boolean(target?.closest('[data-cursor-card]'));
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.documentElement.classList.remove('cursor-ready');
    };
  }, [desktop]);

  useEffect(() => {
    if (!desktop || !origin) return;

    const animate = () => {
      ringPos.current.x += (mouse.current.x - ringPos.current.x) * 0.16;
      ringPos.current.y += (mouse.current.y - ringPos.current.y) * 0.16;
      if (ringRef.current) {
        const scale = hover.current.interactive ? 1.45 : hover.current.card ? 1.9 : 1;
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%) scale(${scale})`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [desktop, origin]);

  if (!desktop || !origin || typeof document === 'undefined') return null;

  return createPortal(
    <>
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-8 w-8 rounded-full border border-champagne-400/50"
        style={{
          transform: `translate3d(${origin.x}px, ${origin.y}px, 0) translate(-50%, -50%)`,
          willChange: 'transform',
        }}
      />
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-1.5 w-1.5 rounded-full bg-champagne-300"
        style={{
          transform: `translate3d(${origin.x}px, ${origin.y}px, 0) translate(-50%, -50%)`,
          willChange: 'transform',
        }}
      />
    </>,
    document.body,
  );
}
