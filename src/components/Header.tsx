"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const curr = window.scrollY;
      setHidden(curr > lastScroll && curr > 100);
      setLastScroll(curr);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScroll]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-100 border-b border-border bg-bg/90 backdrop-blur-xl transition-transform duration-300 ${
        hidden ? "-translate-y-full" : ""
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-8">
        <Link href="/" className="font-serif text-xl font-bold tracking-wider text-ink no-underline">
          物語の泉
          <span className="ml-2 text-xs font-normal tracking-[0.15em] text-ink-faint">
            MONOGATARI NO IZUMI
          </span>
        </Link>
        <nav className="flex items-center gap-8">
          <Link
            href="/#categories"
            className="text-xs tracking-wider text-ink-light no-underline transition-colors hover:text-ink"
          >
            ジャンル
          </Link>
          <Link
            href="/#novels"
            className="text-xs tracking-wider text-ink-light no-underline transition-colors hover:text-ink"
          >
            作品一覧
          </Link>
        </nav>
      </div>
    </header>
  );
}
