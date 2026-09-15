import { useEffect, type ReactNode } from 'react';
import { ArrowLeft, Linkedin } from 'lucide-react';
import { profile } from '@/data/portfolio';
import AmbientBackground from '@/components/AmbientBackground';
import GrainOverlay from '@/components/GrainOverlay';
import CustomCursor from '@/components/CustomCursor';
import Footer from '@/components/Footer';
import ProfilePortrait from '@/components/ui/ProfilePortrait';
import { applyPageMeta } from '@/lib/pageMeta';

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-medium tracking-tight text-ink-100 sm:text-[1.35rem]">{title}</h2>
      <div className="mt-3 space-y-3 text-[0.95rem] leading-[1.75] text-ink-300 sm:text-base">{children}</div>
    </section>
  );
}

export default function LegalLayout({
  title,
  kicker,
  description,
  path,
  updated,
  children,
}: {
  title: string;
  kicker: string;
  description: string;
  path: string;
  updated: string;
  children: ReactNode;
}) {
  useEffect(() => {
    applyPageMeta({ title: `${title} | ${profile.name}`, description, path });
    window.scrollTo(0, 0);
  }, [title, description, path]);

  return (
    <div className="relative min-h-[100svh]">
      <AmbientBackground />
      <GrainOverlay />
      <CustomCursor />

      <header className="relative z-10 flex items-center justify-between px-4 py-5 sm:px-8">
        <a href="/" className="flex items-center gap-2.5">
          <ProfilePortrait variant="nav" />
          <span className="font-medium text-ink-100">{profile.name}</span>
        </a>
        {profile.linkedin && (
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-ink-300 transition-colors duration-220 hover:text-champagne-200"
          >
            LinkedIn
          </a>
        )}
      </header>

      <main id="main-content" className="relative z-10 px-4 pb-8 pt-6 sm:px-6">
        <div className="container-max max-w-3xl">
          <a
            href="/"
            className="inline-flex min-h-11 items-center gap-2 text-sm text-champagne-200 transition-colors duration-220 hover:text-champagne-100"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </a>

          <p className="mt-10 font-mono text-xs uppercase tracking-[0.22em] text-champagne-400">{kicker}</p>
          <h1 className="mt-3 text-[1.85rem] font-medium tracking-tight text-ink-100 sm:text-5xl">{title}</h1>
          <p className="mt-4 text-sm text-ink-400">Last updated: {updated}</p>

          <div className="panel mt-10 rounded-[1.6rem] p-6 sm:p-8 break-words">{children}</div>
        </div>
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
