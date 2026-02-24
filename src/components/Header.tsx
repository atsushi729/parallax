"use client";

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Header() {
  const t = useTranslations('Header');

  return (
    <header
      className="fixed top-0 left-0 right-0 z-100 border-b border-border bg-bg/90 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-8">
        <Link href="/" className="font-serif text-xl font-bold tracking-wider text-ink no-underline">
          {t('siteTitle')}
          <span className="ml-2 text-xs font-normal tracking-[0.15em] text-ink-faint">
            MONOGATARI NO IZUMI
          </span>
        </Link>
        <nav className="flex items-center gap-8">
          <Link
            href="/#categories"
            className="text-xs tracking-wider text-ink-light no-underline transition-colors hover:text-ink"
          >
            {t('navGenres')}
          </Link>
          <Link
            href="/#novels"
            className="text-xs tracking-wider text-ink-light no-underline transition-colors hover:text-ink"
          >
            {t('navLibrary')}
          </Link>
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
}
