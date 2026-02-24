import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="mx-auto flex max-w-[1200px] flex-wrap items-baseline justify-between gap-8 border-t border-border px-8 py-16">
      <div className="font-serif text-base font-semibold">物語の泉</div>
      <div className="text-[0.72rem] tracking-wider text-ink-faint">
        {t('disclaimer')}
      </div>
    </footer>
  );
}
