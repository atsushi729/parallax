"use client";

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { useHeaderHidden } from "./HeaderContext";

export function ReaderHeader({ title }: { title: string }) {
  const t = useTranslations('ReaderHeader');
  const headerHidden = useHeaderHidden();

  return (
    <div
      className={`sticky z-50 border-b border-border bg-bg/95 backdrop-blur-xl transition-[top] duration-300 ${
        headerHidden ? "top-0" : "top-16"
      }`}
    >
      <div className="mx-auto flex max-w-[720px] items-center justify-between px-8 py-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm tracking-wider text-ink-light no-underline transition-colors hover:text-ink"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          {t('back')}
        </Link>
        <div className="font-serif text-sm text-ink-light">{title}</div>
      </div>
    </div>
  );
}
