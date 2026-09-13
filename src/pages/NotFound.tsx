import { useEffect } from 'react';
import { profile } from '@/data/portfolio';
import AmbientBackground from '@/components/AmbientBackground';
import GrainOverlay from '@/components/GrainOverlay';
import CustomCursor from '@/components/CustomCursor';
import ProfilePortrait from '@/components/ui/ProfilePortrait';

export default function NotFound() {
  useEffect(() => {
    document.title = 'Page not found | Divy Jain';
  }, []);

  return (
    <div className="relative min-h-[100svh] overflow-hidden">
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
            className="text-sm text-ink-300 transition-colors hover:text-champagne-200"
          >
            LinkedIn
          </a>
        )}
      </header>

      <main className="relative z-10 flex min-h-[calc(100svh-88px)] items-center justify-center px-4 pb-16 pt-6">
        <div className="mx-auto w-full max-w-xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-champagne-400">404</p>
          <h1 className="mt-4 text-4xl text-ink-100 sm:text-5xl">This page is not here.</h1>
          <p className="mx-auto mt-5 max-w-md text-ink-300">
            The link may be outdated. The portfolio, selected work, and contact form are still on the home page.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="/" className="btn-primary">
              Back to home
            </a>
            <a href="/#contact" className="btn-secondary">
              Start a conversation
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
