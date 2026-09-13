import Reveal from './Reveal';

interface Props {
  index: string;
  kicker: string;
  title: string;
  italic?: string;
  copy?: string;
  align?: 'left' | 'center';
}

export default function SectionHeader({
  index,
  kicker,
  title,
  italic,
  copy,
  align = 'left',
}: Props) {
  return (
    <Reveal className={`mb-12 lg:mb-16 ${align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'}`}>
      <div className={`flex items-center gap-4 mb-5 ${align === 'center' ? 'justify-center' : ''}`}>
        <span className="font-mono text-xs tracking-[0.22em] text-champagne-400">{index}</span>
        <span className="kicker !gap-0 before:hidden">{kicker}</span>
      </div>
      <h2 className="text-4xl sm:text-5xl lg:text-[3.4rem] text-ink-100 text-balance">
        {title}{' '}
        {italic && <span className="italic text-champagne-300">{italic}</span>}
      </h2>
      {copy && (
        <p className={`mt-5 text-ink-300 text-base sm:text-lg leading-relaxed ${align === 'center' ? 'mx-auto max-w-2xl' : 'max-w-2xl'}`}>
          {copy}
        </p>
      )}
    </Reveal>
  );
}
