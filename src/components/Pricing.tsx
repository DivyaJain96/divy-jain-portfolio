import { ArrowUpRight, Check, Layers, Network, Server } from 'lucide-react';
import { pricingPackages } from '@/data/portfolio';
import Reveal from './ui/Reveal';
import SectionHeader from './ui/SectionHeader';

const icons = { Server, Layers, Network } as const;

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding relative">
      <div className="container-max">
        <SectionHeader
          icon={Layers}
          kicker="Engagements"
          title="Clear packages,"
          italic="no theatre."
          copy="Transparent ranges with documentation and post-delivery support included. Custom scopes are welcome."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {pricingPackages.map((pkg, i) => {
            const Icon = icons[pkg.icon as keyof typeof icons] || Server;
            return (
              <Reveal key={pkg.name} delay={i * 0.08}>
                <article
                  className={`panel relative flex h-full flex-col rounded-[1.6rem] p-7 ${
                    pkg.popular ? 'border-champagne-400/35 shadow-glow lg:-translate-y-2' : ''
                  }`}
                >
                  {pkg.popular && (
                    <span className="absolute -top-3 left-7 rounded-full bg-champagne-400 px-3 py-1 text-xs font-medium text-void">
                      Most requested
                    </span>
                  )}
                  <Icon className="h-6 w-6 text-champagne-300" />
                  <h3 className="mt-5 text-xl font-medium tracking-tight text-ink-100">{pkg.name}</h3>
                  <p className="mt-2 text-sm text-ink-300">{pkg.description}</p>
                  <p className="mt-5 font-display text-2xl font-medium tracking-tight text-champagne-200">{pkg.priceRange}</p>
                  <p className="mt-1 text-xs text-ink-400">Starting from {pkg.price}</p>
                  <ul className="mt-6 flex-1 space-y-2.5">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex gap-2.5 text-sm text-ink-200">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-champagne-300" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={pkg.popular ? 'btn-primary mt-8 w-full' : 'btn-secondary mt-8 w-full'}
                  >
                    Get started
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
