import type { LucideIcon } from 'lucide-react';
import Reveal from './Reveal';

interface Props {
  icon: LucideIcon;
  kicker: string;
  title: string;
  italic?: string;
  copy?: string;
  align?: 'left' | 'center';
}

export default function SectionHeader({
  icon: Icon,
  kicker,
  title,
  italic,
  copy,
  align = 'left',
}: Props) {
  return (
    <Reveal className={`mb-12 lg:mb-16 ${align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'}`}>
      <div className={`mb-5 flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}>
        <span className="flex h-7 w-7 shrink-0 items-center justify-center text-champagne-400" aria-hidden>
          <Icon className="h-4 w-4" strokeWidth={1.75} />
        </span>
        <span className="kicker !gap-0 before:hidden">{kicker}</span>
      </div>
      <h2 className="text-[1.85rem] font-medium leading-[1.16] tracking-tight text-ink-100 text-balance sm:text-4xl lg:text-[2.65rem]">
        {title}{' '}
        {italic && <span className="font-medium text-champagne-300">{italic}</span>}
      </h2>
      {copy && (
        <p className={`mt-5 max-w-2xl text-[0.95rem] leading-[1.7] text-ink-300 sm:text-base lg:text-lg ${align === 'center' ? 'mx-auto' : ''}`}>
          {copy}
        </p>
      )}
    </Reveal>
  );
}
