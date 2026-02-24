import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export function HeroSection() {
  const t = useTranslations('Hero');

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Manuscript grid — very subtle washi paper feel */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: [
            "linear-gradient(to right, rgba(26,26,26,0.04) 1px, transparent 1px)",
            "linear-gradient(to bottom, rgba(26,26,26,0.04) 1px, transparent 1px)",
          ].join(","),
          backgroundSize: "72px 72px",
        }}
      />

      {/* Radial gradient — depth/focal light */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 30% 50%, rgba(245,240,232,0) 0%, rgba(245,240,232,0.15) 100%)",
        }}
      />

      {/* Large ghost kanji — decorative right anchor */}
      <div
        className="pointer-events-none absolute right-[-2rem] top-1/2 -translate-y-1/2 select-none font-serif leading-none max-lg:hidden"
        style={{
          fontSize: "clamp(18rem, 30vw, 36rem)",
          fontWeight: 800,
          color: "transparent",
          WebkitTextStroke: "1.5px rgba(26,26,26,0.10)",
          letterSpacing: "-0.05em",
        }}
      >
        泉
      </div>

      {/* Top gradient border */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(138,133,120,0.4) 30%, rgba(138,133,120,0.4) 70%, transparent 100%)",
        }}
      />

      {/* Main content */}
      <div className="relative mx-auto w-full max-w-[1200px] px-8 pb-36 pt-40 max-md:px-6 max-md:pt-32">
        {/* Eyebrow badge */}
        <div
          className="animate-fade-up mb-14 inline-flex items-center gap-3 border border-border px-4 py-2"
          style={{ animationDelay: "0s" }}
        >
          <span
            className="block h-[6px] w-[6px] rounded-full bg-[#1B4965]"
            style={{
              animation: "subtlePulse 2.5s ease-in-out infinite",
            }}
          />
          <span className="font-sans text-[0.65rem] font-medium tracking-[0.28em] text-ink-faint">
            AI GENERATED LITERATURE
          </span>
        </div>

        {/* Heading */}
        <h1
          className="animate-fade-up font-serif"
          style={{ animationDelay: "0.08s" }}
        >
          <span
            className="block text-ink"
            style={{
              fontSize: "clamp(2.8rem, 6.5vw, 5.2rem)",
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.01em",
            }}
          >
            {t('headline1')}
          </span>
          <span
            className="block"
            style={{
              fontSize: "clamp(2.8rem, 6.5vw, 5.2rem)",
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.01em",
            }}
          >
            <span
              style={{
                background:
                  "linear-gradient(135deg, #1B4965 0%, #1E50A2 50%, #1B4965 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {t('headline2gradient')}
            </span>
            <span className="text-ink">{t('headline2suffix')}</span>
          </span>
        </h1>

        {/* Thin accent line beneath heading */}
        <div
          className="animate-fade-up mt-8 flex items-center gap-0"
          style={{ animationDelay: "0.16s" }}
        >
          <div className="h-px w-12 bg-ink" />
          <div className="h-px w-32 bg-border" />
        </div>

        {/* Description */}
        <p
          className="animate-fade-up mt-8 max-w-[460px] font-sans text-[0.95rem] leading-[2] text-ink-light"
          style={{ animationDelay: "0.22s" }}
        >
          {t('description')}
        </p>

        {/* CTA buttons */}
        <div
          className="animate-fade-up mt-12 flex items-center gap-4 max-sm:flex-col max-sm:items-start"
          style={{ animationDelay: "0.3s" }}
        >
          <Link
            href="/#novels"
            className="group inline-flex items-center gap-3 bg-ink px-8 py-4 font-sans text-sm font-medium tracking-[0.12em] text-bg no-underline transition-all duration-200 hover:bg-ink-light"
          >
            {t('ctaPrimary')}
            <svg
              width="13"
              height="10"
              viewBox="0 0 13 10"
              fill="none"
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              <path
                d="M0 5h12M8 1l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link
            href="/#categories"
            className="inline-flex items-center gap-2 border border-border px-8 py-4 font-sans text-sm font-medium tracking-[0.12em] text-ink-light no-underline transition-all duration-200 hover:border-ink hover:text-ink"
          >
            {t('ctaSecondary')}
          </Link>
        </div>

        {/* Stats */}
        <div
          className="animate-fade-up mt-24 flex items-start gap-0 max-sm:flex-col"
          style={{ animationDelay: "0.4s" }}
        >
          {[
            { value: "6", label: t('stat1Label'), en: "GENRES" },
            { value: "∞", label: t('stat2Label'), en: "UNLIMITED" },
            { value: "24/7", label: t('stat3Label'), en: "ALWAYS ON" },
          ].map((stat, i) => (
            <div key={i} className="flex items-stretch max-sm:w-full">
              {i > 0 && (
                <div className="mx-10 w-px self-stretch bg-border max-sm:hidden" />
              )}
              {i > 0 && (
                <div className="my-4 h-px w-full bg-border sm:hidden" />
              )}
              <div className="py-1 max-sm:py-3">
                <span className="block font-serif text-[2.6rem] font-extrabold leading-none tracking-tight text-ink">
                  {stat.value}
                </span>
                <div className="mt-2 flex items-center gap-2">
                  <span className="font-sans text-[0.7rem] font-medium tracking-[0.2em] text-ink-faint">
                    {stat.en}
                  </span>
                  <span className="text-border">·</span>
                  <span className="font-sans text-[0.75rem] text-ink-light">
                    {stat.label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
