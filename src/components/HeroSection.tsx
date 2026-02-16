export function HeroSection() {
  return (
    <section className="relative mx-auto max-w-[1200px] px-8 pt-40 pb-24 max-md:px-6 max-md:pt-32 max-md:pb-16">
      {/* Decorative blur */}
      <div className="pointer-events-none absolute top-32 right-0 h-80 w-80 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(27,73,101,0.06)_0%,transparent_70%)]" />

      <div className="animate-fade-up mb-8 flex items-center gap-4 text-[0.7rem] tracking-[0.25em] uppercase text-ink-faint">
        <span className="block h-px w-10 bg-ink-faint" />
        AI Generated Literature
      </div>

      <h1 className="animate-fade-up font-serif text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-[1.3] tracking-wide [animation-delay:0.1s]">
        生成AIが紡ぐ、
        <br />
        <em className="not-italic bg-gradient-to-br from-mystery to-sf bg-clip-text text-transparent">
          新しい物語
        </em>
        の世界
      </h1>

      <p className="animate-fade-up mt-6 max-w-[520px] text-base leading-8 text-ink-light [animation-delay:0.2s]">
        人工知能が創り出す多彩なジャンルの小説を、いつでも自由にお読みいただけます。ミステリーから青春小説まで、無限に広がる物語の泉へようこそ。
      </p>

      <div className="animate-fade-up mt-12 flex gap-12 [animation-delay:0.3s] max-md:gap-8 max-sm:flex-col max-sm:gap-6">
        <div>
          <span className="block font-serif text-3xl font-bold">6</span>
          <span className="text-xs tracking-[0.1em] text-ink-faint">ジャンル</span>
        </div>
        <div>
          <span className="block font-serif text-3xl font-bold">&infin;</span>
          <span className="text-xs tracking-[0.1em] text-ink-faint">読み放題</span>
        </div>
        <div>
          <span className="block font-serif text-3xl font-bold">24/7</span>
          <span className="text-xs tracking-[0.1em] text-ink-faint">いつでも</span>
        </div>
      </div>
    </section>
  );
}
