"use client";

import { useRouter } from "next/navigation";
import { CATEGORIES, CATEGORY_BAR_COLORS, type Category } from "@/lib/novels";

const catKeys = Object.keys(CATEGORIES) as Category[];

export function CategoryGrid() {
  const router = useRouter();

  return (
    <section id="categories" className="mx-auto max-w-[1200px] px-8 pt-16 pb-8">
      <div className="mb-10 flex items-baseline justify-between border-b border-border pb-4">
        <h2 className="font-serif text-lg font-semibold tracking-wide">ジャンル</h2>
        <span className="text-xs tracking-[0.1em] text-ink-faint">GENRES</span>
      </div>

      <div className="grid grid-cols-3 gap-px border border-border bg-border max-md:grid-cols-1">
        {catKeys.map((key) => {
          const cat = CATEGORIES[key];
          return (
            <button
              key={key}
              onClick={() => router.push(`/?category=${key}#novels`)}
              className="group relative overflow-hidden bg-bg px-8 py-10 text-left transition-colors hover:bg-bg-warm max-sm:px-6 max-sm:py-6"
            >
              {/* Colored bar on hover */}
              <span
                className={`absolute top-0 left-0 h-0 w-[3px] transition-all duration-400 group-hover:h-full ${CATEGORY_BAR_COLORS[key]}`}
              />
              <span className="mb-4 block text-2xl">{cat.icon}</span>
              <div className="font-serif text-lg font-semibold">{cat.label}</div>
              <div className="mt-1 text-[0.65rem] tracking-[0.2em] uppercase text-ink-faint">
                {cat.en}
              </div>
              <div className="mt-4 text-sm text-ink-light">{cat.count} 作品</div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
