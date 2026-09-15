import { useEffect, useRef } from 'react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

type Node = {
  id: string;
  label: string;
  ox: number;
  oy: number;
  x: number;
  y: number;
};

const GRAPH = [
  { id: 'ui', label: 'UI', ox: 0.18, oy: 0.28 },
  { id: 'be', label: 'Backend', ox: 0.5, oy: 0.2 },
  { id: 'db', label: 'Database', ox: 0.82, oy: 0.32 },
  { id: 'api', label: 'APIs', ox: 0.28, oy: 0.58 },
  { id: 'int', label: 'Integrations', ox: 0.72, oy: 0.58 },
  { id: 'prod', label: 'Production', ox: 0.5, oy: 0.82 },
];

const EDGES: [string, string][] = [
  ['ui', 'be'],
  ['be', 'db'],
  ['ui', 'api'],
  ['be', 'api'],
  ['api', 'int'],
  ['db', 'prod'],
  ['int', 'prod'],
];

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const parent = canvas.parentElement;
    if (!parent) return;

    let raf = 0;
    let width = 0;
    let height = 0;
    const mouse = { x: 0.5, y: 0.5 };
    const nodes: Node[] = GRAPH.map((n) => ({ ...n, x: n.ox, y: n.oy }));

    const resize = () => {
      const rect = parent.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
      width = Math.max(rect.width, 1);
      height = Math.max(rect.height, 1);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      mouse.x = (e.clientX - rect.left) / rect.width;
      mouse.y = (e.clientY - rect.top) / rect.height;
    };

    const draw = (t: number) => {
      if (!width || !height) {
        resize();
      }
      ctx.clearRect(0, 0, width, height);

      ctx.fillStyle = 'rgba(201,174,124,0.045)';
      for (let x = 36; x < width; x += 36) {
        ctx.fillRect(x, 0, 1, height);
      }
      for (let y = 36; y < height; y += 36) {
        ctx.fillRect(0, y, width, 1);
      }

      const pulse = reduced ? 0.65 : Math.sin(t * 0.0014) * 0.35 + 0.65;

      nodes.forEach((node, i) => {
        const sway = reduced ? 0 : Math.sin(t * 0.0008 + i) * 0.01;
        node.x = node.ox + sway + (mouse.x - 0.5) * 0.035;
        node.y = node.oy + (reduced ? 0 : Math.cos(t * 0.0007 + i) * 0.01) + (mouse.y - 0.5) * 0.035;
      });

      ctx.lineWidth = 1.4;
      EDGES.forEach(([a, b], i) => {
        const from = nodes.find((n) => n.id === a);
        const to = nodes.find((n) => n.id === b);
        if (!from || !to) return;
        const x1 = from.x * width;
        const y1 = from.y * height;
        const x2 = to.x * width;
        const y2 = to.y * height;
        const grad = ctx.createLinearGradient(x1, y1, x2, y2);
        grad.addColorStop(0, `rgba(232,210,160,${0.28 + pulse * 0.2})`);
        grad.addColorStop(1, `rgba(157,184,180,${0.24 + pulse * 0.18})`);
        ctx.strokeStyle = grad;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();

        if (!reduced) {
          const p = (t * 0.00022 + i * 0.12) % 1;
          ctx.fillStyle = i % 2 === 0 ? '#e8d2a0' : '#9bb8b4';
          ctx.beginPath();
          ctx.arc(x1 + (x2 - x1) * p, y1 + (y2 - y1) * p, 2.6, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      nodes.forEach((node, i) => {
        const x = node.x * width;
        const y = node.y * height;
        const glow = ctx.createRadialGradient(x, y, 0, x, y, 52);
        glow.addColorStop(0, i === 0 || i === 2 ? 'rgba(201,174,124,0.28)' : 'rgba(122,158,154,0.2)');
        glow.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(x, y, 52, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(x, y, 7, 0, Math.PI * 2);
        ctx.fillStyle = i === 0 || i === 2 ? '#e8d2a0' : '#9bb8b4';
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#08090c';
        ctx.stroke();

        ctx.font = '500 12px Outfit, system-ui, sans-serif';
        ctx.fillStyle = '#e8e4dc';
        ctx.textAlign = 'center';
        ctx.fillText(node.label, x, y + 24);
      });

      if (!reduced) raf = requestAnimationFrame(draw);
    };

    resize();
    raf = requestAnimationFrame(draw);
    const ro = new ResizeObserver(() => {
      resize();
      if (reduced) draw(0);
    });
    ro.observe(parent);
    window.addEventListener('mousemove', onMove, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener('mousemove', onMove);
    };
  }, [reduced]);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />;
}
