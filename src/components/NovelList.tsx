"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { novels, CATEGORIES, CATEGORY_COLORS, type Category } from "@/lib/novels";

const filterOptions: { key: string; label: string }[] = [
  { key: "all", label: "すべて" },
  { key: "mystery", label: "ミステリー" },
  { key: "history", label: "歴史小説" },
  { key: "sf", label: "SF" },
  { key: "horror", label: "ホラー" },
  { key: "social", label: "社会派" },
  { key: "youth", label: "青春" },
];

export function NovelList() {
  const searchParams = useSearchParams();
  const activeFilter = searchParams.get("category") || "all";

  const filtered =
    activeFilter === "all"
      ? novels
      : novels.filter((n) => n.category === activeFilter);

  return (
    <section id="novels" className="mx-auto max-w-[1200px] px-8 py-16">
      <div className="mb-10 flex items-baseline justify-between border-b border-border pb-4">
        <h2 className="font-serif text-lg font-semibold tracking-wide">作品一覧</h2>
        <span className="text-xs tracking-[0.1em] text-ink-faint">LIBRARY</span>
      </div>

      {/* Filters */}
      <div className="mb-10 flex flex-wrap gap-2">
        {filterOptions.map((opt) => (
          <Link
            key={opt.key}
            href={opt.key === "all" ? "/" : `/?category=${opt.key}#novels`}
            scroll={false}
            className={`border px-5 py-2 text-[0.78rem] tracking-wide transition-all no-underline ${
              activeFilter === opt.key
                ? "border-ink bg-ink text-bg"
                : "border-border bg-transparent text-ink-light hover:border-ink-light hover:text-ink"
            }`}
          >
            {opt.label}
          </Link>
        ))}
      </div>

      {/* List */}
      <div className="flex flex-col">
        {filtered.map((novel, i) => (
          <Link
            key={novel.id}
            href={`/novel/${novel.id}`}
            className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-8 border-b border-border py-7 text-ink no-underline transition-opacity first:border-t hover:opacity-70 max-md:grid-cols-1 max-md:gap-3"
          >
            <span className="min-w-8 font-serif text-sm text-ink-faint max-md:hidden">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="min-w-0">
              <div className="font-serif text-lg font-semibold tracking-wide">
                {novel.title}
              </div>
              <div className="mt-1 flex flex-wrap gap-6 text-xs text-ink-faint">
                <span>{novel.description}</span>
                <span>{novel.readingTime}</span>
                <span>{novel.date}</span>
              </div>
            </div>
            <span
              className={`self-center whitespace-nowrap border px-3 py-1 text-[0.7rem] tracking-wider max-md:self-start ${
                CATEGORY_COLORS[novel.category]
              }`}
            >
              {novel.categoryLabel}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
