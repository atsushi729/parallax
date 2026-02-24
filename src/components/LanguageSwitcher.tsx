"use client";

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { useTransition } from 'react';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const otherLocale = locale === 'ja' ? 'en' : 'ja';
  const label = locale === 'ja' ? 'EN' : 'JA';

  return (
    <button
      onClick={() => startTransition(() => router.replace(pathname, { locale: otherLocale }))}
      disabled={isPending}
      className={`text-xs tracking-[0.15em] text-ink-light transition-colors hover:text-ink border border-border px-3 py-1 ${isPending ? 'opacity-50' : ''}`}
    >
      {label}
    </button>
  );
}
