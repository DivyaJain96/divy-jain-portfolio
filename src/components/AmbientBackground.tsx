export default function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden [clip-path:inset(0)]" aria-hidden="true">
      <div className="absolute inset-0 bg-void" />
      <div className="absolute inset-0 bg-grid-fine bg-[size:72px_72px] opacity-60" />
      <div className="hero-aurora absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,174,124,0.09),transparent_42%)]" />
      <div className="absolute -top-24 left-[12%] h-[420px] w-[420px] rounded-full bg-champagne-400/8 blur-3xl animate-float" />
      <div
        className="absolute bottom-[8%] right-[-6%] h-[480px] w-[480px] rounded-full bg-signal-500/10 blur-3xl animate-float"
        style={{ animationDelay: '-3s' }}
      />
      <div className="absolute inset-x-0 top-0 h-px hairline" />
    </div>
  );
}
