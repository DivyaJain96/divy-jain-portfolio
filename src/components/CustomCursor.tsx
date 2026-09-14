import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const [origin, setOrigin] = useState<{ x: number; y: number } | null>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const hover = useRef({ interactive: false, card: false });
  const rafRef = useRef(0);
  const started = useRef(false);

  useEffect(() => {
    const isTouch = window.matchMedia('(hover: none)').matches;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || prefersReduced) return;

    const onMove = (e: PointerEvent) => {
      if (e.pointerType && e.pointerType !== 'mouse') return;
      if (!started.current && e.clientX === 0 && e.clientY === 0) return;

      mouse.current = { x: e.clientX, y: e.clientY };

      if (!started.current) {
        started.current = true;
        ringPos.current = { x: e.clientX, y: e.clientY };
        setOrigin({ x: e.clientX, y: e.clientY });
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }

      const target = e.target as HTMLElement;
      hover.current.interactive =
        target.closest('a, button, input, textarea, select, [role="button"]') !== null;
      hover.current.card = target.closest('[data-cursor-card]') !== null;
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onMove);
    };
  }, []);

  useEffect(() => {
    if (!origin) return;

    const animate = () => {
      ringPos.current.x += (mouse.current.x - ringPos.current.x) * 0.16;
      ringPos.current.y += (mouse.current.y - ringPos.current.y) * 0.16;
      if (ringRef.current) {
        const scale = hover.current.interactive ? 1.45 : hover.current.card ? 1.9 : 1;
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%) scale(${scale})`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [origin]);

  if (!origin) return null;

  return (
    <>
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-8 w-8 rounded-full border border-champagne-400/50"
        style={{
          transform: `translate(${origin.x}px, ${origin.y}px) translate(-50%, -50%)`,
          willChange: 'transform',
        }}
      />
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-1.5 w-1.5 rounded-full bg-champagne-300"
        style={{
          transform: `translate(${origin.x}px, ${origin.y}px) translate(-50%, -50%)`,
          willChange: 'transform',
        }}
      />
    </>
  );
}
