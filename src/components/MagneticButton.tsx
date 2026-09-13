import { useRef, type ReactNode, type MouseEvent } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
  download?: boolean;
  ariaLabel?: string;
  strength?: number;
}

function canMagnetize() {
  return (
    window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

export default function MagneticButton({
  children,
  className = '',
  href,
  onClick,
  download,
  ariaLabel,
  strength = 0.22,
}: Props) {
  const wrapRef = useRef<HTMLSpanElement>(null);

  const handleMove = (e: MouseEvent<HTMLElement>) => {
    const wrap = wrapRef.current;
    if (!wrap || !canMagnetize()) return;
    const rect = wrap.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    wrap.style.transition = 'transform 0.08s linear';
    wrap.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const handleLeave = () => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    wrap.style.transition = 'transform 0.45s cubic-bezier(0.16,1,0.3,1)';
    wrap.style.transform = 'translate(0, 0)';
  };

  const shared = {
    className: `${className} group`,
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    onClick,
    'aria-label': ariaLabel,
  };

  return (
    <span ref={wrapRef} className="inline-flex">
      {href ? (
        <a href={href} download={download} {...shared}>
          {children}
        </a>
      ) : (
        <button type="button" {...shared}>
          {children}
        </button>
      )}
    </span>
  );
}
